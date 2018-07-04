import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppHeader from '../components/common/AppHeader';
import { openFilters, closeFilters } from '../modules/navigation/actions';

class AppHeaderScreen extends Component {
  render() {
    return <AppHeader {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ openFilters, closeFilters }, dispatch);

const mapStateToProps = state => ({
  filtersOpen: state.navigation.filtersOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderScreen);
