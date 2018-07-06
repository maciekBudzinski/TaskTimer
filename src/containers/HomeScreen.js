import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeFilters } from '../modules/navigation/actions';
import { getCategories } from '../modules/categories/actions';
import { getTasks } from '../modules/task/actions';
import Home from '../components/home/Home';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getTasks();
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeFilters, getCategories, getTasks }, dispatch);

const mapStateToProps = state => ({
  filtersOpen: state.navigation.filtersOpen,
  tasks: state.task.tasks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
