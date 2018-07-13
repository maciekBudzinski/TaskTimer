import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TaskCard from '../components/common/TaskCard';
import { stopTask, deleteTask, getTasks, getCurrentTask } from '../modules/task/actions';

class TaskContainer extends Component {
  render() {
    return <TaskCard {...this.props} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTask,
      stopTask,
      getTasks,
      getCurrentTask,
    },
    dispatch
  );

const mapStateToProps = state => ({
  // currentTaskTime: state.task.currentTaskTime,
  categories: state.category.categories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer);
