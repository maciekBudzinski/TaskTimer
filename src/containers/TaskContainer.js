import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskCard from '../components/common/TaskCard';
import { closeFilters } from '../modules/navigation/actions';
import { getCategories } from '../modules/categories/actions';
import {
  getTasks,
  getCurrentTask,
  setCurrentTaskTime,
  iterateCurrentTaskTime,
  deleteTask,
} from '../modules/task/actions';

class TaskContainer extends Component {
  render() {
    return <TaskCard {...this.props} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTask,
    },
    dispatch
  );

const mapStateToProps = state => ({
  currentTaskTime: state.task.currentTaskTime,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer);
