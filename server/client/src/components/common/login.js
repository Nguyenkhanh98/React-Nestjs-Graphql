import $ from 'jquery';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { get, isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { toastr } from 'react-redux-toastr';

import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import * as auth from '../../helpers/auth';
import config from '../../config';
import LoginForm from '../forms/login';
import Loading from '../../theme/loading';
import backgroundImage from '../../assests/images/background.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { UserAction } from '../../redux/actions';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string,
};

const customStyle = {
  background: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute'
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', () => {
      correctHeight();
      detectBody();
    });
  }

  static getDerivedStateFromProps(nextProps) {
    if (!isEmpty(get(nextProps, 'user.auth')) && auth.isAuth()) {
      nextProps.history.push('/app/home');
    }
    return null;
  }

  render() {
    if (this.props.loading) { return <Loading />; }
    if (this.props.error) { toastr.error('Get Hired!', this.props.error); }

    return (
      <div style={customStyle.background}>
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <button
            type="submit"
            id="btnLogin"
            className="btn btn-primary block full-width m-b"
            onClick={this.login}
          >
            Login with microsoft account
          </button>
          <br />
        </div>
      </div>
    );
  }

  login = async () => {
    await this.props.loginAction();
  };
}

Login.propTypes = {
  // history: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired,
  // error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  test: 'state.test'
});

const mapDispatchToProps = (dispatch) => {
  return { dispatch, ...bindActionCreators(UserAction, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
