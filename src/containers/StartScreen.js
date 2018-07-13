import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeForm } from '../modules/navigation/actions';
import { customerLogin, customerRegistration } from '../modules/customer/actions';

import Start from '../components/start/Start';

class StartScreen extends Component {
  render() {
    return (
      <Container>
        <Start {...this.props} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeForm, customerLogin, customerRegistration }, dispatch);

const mapStateToProps = state => ({
  currentForm: state.navigation.currentForm,
  isAuthenticated: state.customer.isAuthenticated,
  isSuccess: state.customer.isSuccess,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);
