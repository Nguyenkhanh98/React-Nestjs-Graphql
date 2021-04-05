import React, { Component, useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Paper, TextField, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, gql, useMutation, useLazyQuery } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import DateFnsUtils from '@date-io/date-fns';
import DataGrid, { SelectColumn, TextEditor, Row, Cell } from 'react-data-grid';

import { AmeliaReportUserService, UserService } from '../../services';

import Ibox from '../../theme/ibox';
import { toastr } from 'react-redux-toastr';
import { filter } from 'lodash';

const dateFns = new DateFnsUtils();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  loadingButton: {
    color: "#93999c",
    animationDuration: "300ms",
    position: "absolute",
    left: '50%',
    top: '50%'
  },
  circle: {
    strokeLinecap: "round"
  }

}));

const customStyle = {
  grid: {
    height: "85vh"
  }
}


function rowKeyGetter(row) {
  return row.glPaymentsReceiptNmbr;
}

const allowMethodEdit = ['RF', 'CA', 'POS', 'POSCA', 'POSCARD', 'POSQR'];

const isBottom = (event) => {
  const { target } = event;
  return target.clientHeight + target.scrollTop === target.scrollHeight;
}

const groupBy = 'LngGlPaymentsReceiptNmbr,LngReservationNmbr';

const PAGE_SIZE = 30;

const RowRenderer = (props) => {
  const { rowIdx } = props;
  if (rowIdx % 31 === 1 && rowIdx / 31 >= 1) {
    return (
      <Row {...props} rowClass={() => "grid-newRow-border"} />
    );
  }
  return (
    <Row {...props} />
  );
};

const Dashboard = () => {
  const classes = useStyles();

  const [filters, setFilters] = useState({
    strPaymentTakenBy: '',
    pnr: null,
    startDate: null,
    endDate: null,
    pageSize: PAGE_SIZE,
    pageNumber: 1,
  });

  const [open, setOpen] = React.useState(false);

  const [listUsers, setListUsers] = React.useState([]);
  const [isLoadingUser, setIsLoadingUser] = useState(false);


  const [listVwGlPayment, setListVwGlPayment] = useState([]);

  const loadingUsers = open && isLoadingUser;


  const onFilterChanged = ({ target }) => {
    let { value, name } = target;
    if (name === 'pnr') {
      value = parseInt(value);
    }
    setFilters({
      ...filters,
      [name]: value
    })
  }


  const getListUser = async (params) => {
    let query = params || {};
    if (!query.pageSize) {
      query.pageSize = 30;
    }

    try {
      return await AmeliaReportUserService.findAll(query);
    } catch (error) {
      toastr.error('Something went wrong!');
    }
  }

  const onDateChange = useCallback(({ name, value }) => {
    if (value) {
      if (isNaN(value.getTime())) {
        return;
      }
      setFilters({
        ...filters,
        [name]: value
      })
    }
  });

  const onUserSelect = useCallback((event, value) => {
    if (value) {
      setFilters({ ...filters, strPaymentTakenBy: value.strUserName })

    }
  }, []);

  const onUserSearchChange = useCallback(async ({ target }) => {
    setIsLoadingUser(true);
    const getUserRequest = await getListUser({ userName: target.value });
    if (getUserRequest) {
      const { amelia_report_users } = getUserRequest.data;
      setListUsers(amelia_report_users);
    }

    setIsLoadingUser(false);
  }, []);


  const handleScroll = useCallback(async (data) => {
    if (!isBottom(data)) return;

    console.log(listVwGlPayment.length, filters.pageSize)
    if (listVwGlPayment.length >= filters.pageSize) {
      const pageNumber = listVwGlPayment.length / filters.pageSize + 1;
      console.log(pageNumber);
      setFilters({ ...filters, pageNumber });
    }

  }, [filters, listVwGlPayment.length]);

  const onRowsChange = useCallback((rows, dataCellChanged) => {
    const { indexes, column } = dataCellChanged;
    const rowIndex = indexes[0];
    const columnKey = column.key;
    const rowChanged = rows[rowIndex];
    const { glPaymentMethodIdent } = rowChanged;
    if (allowMethodEdit.includes(glPaymentMethodIdent)) {
      setListVwGlPayment(rows);
      const { updatedAt, __typename, ...rowData } = rowChanged;
      updateVwGlPayment({ variables: { data: rowData } });
    }

  }, []);

  const GET_VWGLPAYMENTS = gql` 
    query vwGlPayments($vwGlPaymentRequest: VwGlPaymentRequest!) {
          vwGlPayments(query : $vwGlPaymentRequest){
            reservationNumber,
            reservationLocator,
            paymentTakenBy,
            glPaymentsAmount,
            glPaymentDate,
            glPaymentsReceiptNmbr,
            glPaymentMethodIdent,
            adjustmentMethod,
            description,
            updatedAt,
        }
      }
`;

  const [getVwGlPayments, { loading, data }] = useLazyQuery(GET_VWGLPAYMENTS);

  const UPDATE_VWGLPAYMENTS = gql`
    mutation updateVwGlPayment($data: UpdateVwGlPayment!) {
      updateVwGlPayment(data : $data)
      }
  `

  const [updateVwGlPayment, reponse] = useMutation(UPDATE_VWGLPAYMENTS);

  useEffect(() => {
    const { startDate, endDate, pnr, strPaymentTakenBy } = filters;
    if (!startDate || !strPaymentTakenBy) {
      return undefined;
    }
    if (endDate && startDate) {
      let startTime = new Date(startDate).getTime();
      let endTime = new Date(endDate).getTime();
      const limitTime = 90 * 24 * 60 * 60 * 1000; // 90 days;
      const leastTime = 1 * 24 * 60 * 60 * 1000; // 1 day;
      // if (startTime > endTime - leastTime || endTime > startTime + limitTime) {
      //   return undefined;
      // }
    }
    console.log(filters);
    getVwGlPayments({ variables: { vwGlPaymentRequest: { ...filters, groupBy } } });
  }, [filters]);




  useEffect(() => {
    if (data) {
      const { vwGlPayments } = data;
      if (vwGlPayments) {
        setListVwGlPayment([...listVwGlPayment, ...vwGlPayments]);
      }
    }
  }, [data])


  const dateTimeValiDate = useMemo(() => {
    if (filters.startDate) {
      const startTime = filters.startDate.getTime();
      if (!isNaN(startTime)) {
        return {
          minDate: startTime + 1 * 24 * 60 * 60 * 1000, // 1day
          minDateMessage: "Must be higher start date",
          maxDate: startTime + 90 * 24 * 60 * 60 * 1000, // 90 days
          maxDateMessage: "Must be in 90 days from start day"
        }
      }

    }
  }, [filters.startDate]);

  const defaultColumnProperties = {
    resizable: true,
  }

  const columns = [
    {
      ...defaultColumnProperties,
      key: 'reservationNumber',
      name: 'PNR',
      frozen: true,
      width: 120,
    },
    {
      ...defaultColumnProperties,
      key: 'reservationLocator',
      name: 'Locator',
      frozen: true,
      width: 120,

    },
    {
      ...defaultColumnProperties,
      key: 'paymentTakenBy',
      name: 'Payment Taken By',
      frozen: true,
      width: 240
    },

    {
      ...defaultColumnProperties,
      key: 'glPaymentsAmount',
      name: 'Payment Amount',
      resizable: true,
      width: 180,
      formatter: ({ row }) => {
        const formatMoney = new Intl.NumberFormat().format(row.glPaymentsAmount);
        return <>{formatMoney}</>
      }
    },

    {
      ...defaultColumnProperties,
      key: 'glPaymentDate',
      name: 'Payment Date',
      resizable: true,
      width: 140,
      formatter: ({ row }) => {
        const formatDate = dateFns.format(new Date(row.glPaymentDate), 'dd/MM/yyyy') || '';
        return <>{formatDate}</>
      }

    },
    {
      ...defaultColumnProperties,
      key: 'glPaymentsReceiptNmbr',
      name: 'ReceiptNumber',
      resizable: true,
      width: 160
    },

    {
      ...defaultColumnProperties,
      key: 'glPaymentMethodIdent',
      name: 'Origin Method',
      resizable: true,
      width: 140,
    },
    {
      ...defaultColumnProperties,
      key: 'adjustmentMethod',
      name: 'Adjustment Method',
      width: 200,
      editor: TextEditor
    },

    {
      ...defaultColumnProperties,
      key: 'description',
      name: 'Description',
      resizable: true,
      width: '30%',
      editor: TextEditor


    },

  ]
  return (

    <div className="row">
      <div className="col-lg-12">
        <div className="text-center m-t-lg">
          <h1> PNR Management</h1>
          <small>
            Hello word
          </small>

          <Ibox title="PNR Adjustment Method"
            subTitle={<small>find or query pnr</small>}
            label={<span className="label label-success " style={{ float: 'right' }}>Monthly</span>}>
            <>
              <div className="row row align-items-top" style={{ marginBottom: "1em" }} >
                <div className="col-lg-6">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <Autocomplete
                        size="small"
                        options={listUsers}
                        getOptionLabel={(option) => option.strUserName}
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => {
                          setOpen(false)
                        }}
                        onInputChange={onUserSearchChange}
                        getOptionSelected={(option, value) => option.strUserName === value.strUserName}
                        onChange={onUserSelect}
                        selectOnFocus={true}
                        loading={loadingUsers}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Payment Taken By"
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <React.Fragment>
                                  {loadingUsers ? <CircularProgress color="inherit" size={20} /> : null}
                                  {params.InputProps.endAdornment}
                                </React.Fragment>
                              )
                            }}
                          />)}
                        renderOption={(option, { inputValue }) => {
                          const matches = match(option.strUserName, inputValue);
                          const parts = parse(option.strUserName, matches);

                          return (
                            <div>
                              {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                  {part.text}
                                </span>
                              ))}
                            </div>
                          );
                        }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <TextField label="PNR/Locator" type="number" name="pnr" onChange={onFilterChanged} size="small" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        onChange={(date) => onDateChange({ name: "startDate", value: date })}
                        label="Start date"
                        name="startDate"
                        value={filters.startDate}
                        onChange={(date) => onDateChange({ name: "startDate", value: date })}
                        style={{ width: "40%", margin: 0 }}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        label="End date"
                        style={{ width: "40%", margin: 0 }}
                        name="endDate"
                        value={filters.endDate}
                        onChange={(date) => onDateChange({ name: "endDate", value: date })}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        {...dateTimeValiDate}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>

              </div>

              <DataGrid
                minHeight={1000}
                columns={columns}
                rows={listVwGlPayment}

                defaultColumnOptions={{
                  sortable: true,
                  resizable: true
                }}

                rowKeyGetter={rowKeyGetter}
                rowRenderer={RowRenderer}
                onScroll={handleScroll}
                style={customStyle.grid}

              >
              </DataGrid>

              {loading &&
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  className={classes.loadingButton}
                  classes={{ circle: classes.circle }}
                  size={40}
                  thickness={4}
                />
              }
            </>
          </Ibox>
        </div>
      </div >
    </div >
  );
};

export default Dashboard;
