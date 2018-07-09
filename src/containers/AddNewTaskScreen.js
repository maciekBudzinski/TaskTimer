import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, getCurrentTask, setCurrentTaskTime, iterateCurrentTaskTime } from '../modules/task/actions';
import AddNewTask from '../components/addNewTask/AddNewTask';

class AddNewTaskScreen extends Component {
  render() {
    return <AddNewTask {...this.props} />;
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  isLoadingCategory: state.category.isLoading,
  taskAdded: state.task.taskAdded,
  isLoadingTask: state.task.isLoading,
  currentTask: state.task.currentTask,
  currentTaskTime: state.task.currentTaskTime,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addTask, getCurrentTask, setCurrentTaskTime, iterateCurrentTaskTime }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewTaskScreen);
