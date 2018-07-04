import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeFilters } from '../modules/navigation/actions';
import Home from '../components/home/Home';

class HomeScreen extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ closeFilters }, dispatch);

const mapStateToProps = state => ({
  filtersOpen: state.navigation.filtersOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
