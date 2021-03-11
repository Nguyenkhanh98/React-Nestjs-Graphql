import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  DateRangePicker,
  DateRangeDelimiter,
  LocalizationProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
  Lookup,
  Scrolling,
  LoadPanel,
  SearchPanel,
} from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

import { states, employees } from './sample.data';

import Ibox from '../../theme/ibox';

const dataSource = new DataSource({
  store: new ArrayStore({
    data: employees,
    key: 'ID',
  }),

});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Dashboard = () => {
  const label = <span className="label label-success " style={{ float: 'right' }}>Monthly</span>;
  const [selectedDate, handleDateChange] = React.useState([null, null]);

  const onOptionChanged = (options) => {
    console.log(options);
  };

  const classes = useStyles();

  return (

    <div className="row">
      <div className="col-lg-12">
        <div className="text-center m-t-lg">
          <h1> Página dashboard</h1>
          <small>
            Hello word
          </small>

          <Ibox title="PNR Adjustment Method" subTitle="find or query pnr" label={label}>
            <div className="data-grid-demo">
              <div className="row">
                <div className="col-lg-6">
                  <div className={classes.root}>
                    <TextField label="Payment Taken By" />
                    <TextField label="PNR" />
                  </div>

                </div>
                <div className="col-lg-6">
                  <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <DateRangePicker
                      startText="Check-in"
                      endText="Check-out"
                      value={selectedDate}
                      onChange={(date) => handleDateChange(date)}
                      renderInput={(startProps, endProps) => (
                        <>
                          <TextField {...startProps} />
                          <DateRangeDelimiter> to </DateRangeDelimiter>
                          <TextField {...startProps} />
                        </>
                      )}
                    />
                  </LocalizationProvider>
                </div>

              </div>
              <DataGrid
                dataSource={employees}
                keyExpr="ID"
                showBorders={true}
                elementAttr={{
                  id: 'data-grid--height',
                }}
                onOptionChanged={onOptionChanged}
              >

                <SearchPanel visible OptionName="sads" />

                <Selection mode="multiple" caption="se" allowDeleting allowAdding allowSelectAll />
                <Paging enabled />
                <Editing
                  mode="cell"
                  allowUpdating
                  allowDeleting
                  allowAdding
                />

                <Column dataField="StateID" caption="Payment Taken By">
                  <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
                </Column>
                <Column dataField="Prefix" caption="Payment Date" />
                <Column dataField="Position" caption="PNR" />
                <Column dataField="BirthDate" caption="Receipt Number" />
                <Column dataField="HireDate" caption="Origin Method" width={170} />
                <Column dataField="Address" caption="Payment Account" />
                <Column dataField="FirstName" caption="Adjustment Method" />
                <Column dataField="HireDate" dataType="date" caption="Description" />
                <Scrolling mode="infinite" />
                <LoadPanel enabled="true" />
              </DataGrid>
            </div>
          </Ibox>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
