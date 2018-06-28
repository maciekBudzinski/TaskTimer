import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeForm } from '../actions/navigationActions';

import Start from '../components/Start/Start';

class StartScreen extends Component {
  render() {
    return (
      <Container>
        <Start {...this.props} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeForm }, dispatch);

const mapStateToProps = state => ({
  currentForm: state.navigation.currentForm,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen);

// export default StartScreen;
