import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from '@material-ui/core';

const customStyle = {
  small: {
    paddingLeft: '8px',
  },
};

const Ibox = (props) => {
  const {
    title, label, children, isCollapse, isClose, subTitle,
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  const [collapse, setCollapse] = useState(true);

  const onClickCollapse = () => {
    setCollapse(!collapse);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen
        && (
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <div>
                      <h5>
                        {title}
                        <small style={customStyle.small}>
                          {subTitle}
                        </small>
                      </h5>
                    </div>

                    {label}
                    <div className="ibox-tools">
                      {isCollapse && (
                      <a className="collapse-link" onClick={onClickCollapse}>
                        <i className={`fa ${collapse ? 'fa-chevron-down' : ' fa-chevron-up'}`} />
                      </a>
                      )}

                      { isClose && (
                        <a className="close-link" onClick={onClose}>
                          <i className="fa fa-times" />
                        </a>
                      )}
                    </div>
                  </div>
                  <Collapse in={collapse}>
                    <div className="ibox-content">
                      {children}
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

Ibox.defaultProps = {
  label: null,
  style: {},
  isCollapse: true,
  isClose: true,
  children: null,
  subTitle: null,
};

Ibox.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.element,
  style: PropTypes.object,
  isCollapse: PropTypes.bool,
  isClose: PropTypes.bool,
  children: PropTypes.element,
  subTitle: PropTypes.element,
};
export default Ibox;
