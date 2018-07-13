import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import axios from 'axios';
import { closeFilters } from '../modules/navigation/actions';
import { getCategories } from '../modules/categories/actions';
import {
  getTasks,
  getCurrentTask,
  setCurrentTaskTime,
  iterateCurrentTaskTime,
  deleteTask,
  stopInterval,
  filterTasks,
  clearFilters,
} from '../modules/task/actions';
import Home from '../components/home/Home';

class HomeScreen extends Component {
  componentDidMount() {
    const { getCategories, getTasks, getCurrentTask, clearFilters, navigation } = this.props;
    AsyncStorage.getItem('token')
      .then(value => {
        if (value.length > 0) {
          axios.defaults.headers.common.Authorization = `Bearer ${value}`;
          getCategories();
          getCurrentTask();
          getTasks();
          clearFilters();
        }
      })
      .catch(error => {
        console.log('e', error);
        navigation.navigate('Auth');
      });
  }

  componentWillUnmount() {
    stopInterval();
  }

  render() {
    const { categories } = this.props;
    return categories.length > 0 && <Home {...this.props} />;
  }
}

HomeScreen.propTypes = {
  categories: PropTypes.array.isRequired,
  clearFilters: PropTypes.func.isRequired,
  currentTask: PropTypes.object,
  currentTaskTime: momentPropTypes.momentObj,
  getCategories: PropTypes.func.isRequired,
  getCurrentTask: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  iterateCurrentTaskTime: PropTypes.func,
  setCurrentTaskTime: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

HomeScreen.defaultProps = {
  currentTask: null,
  currentTaskTime: null,
  setCurrentTaskTime: () => {},
  iterateCurrentTaskTime: () => {},
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeFilters,
      getCategories,
      getTasks,
      getCurrentTask,
      setCurrentTaskTime,
      iterateCurrentTaskTime,
      deleteTask,
      filterTasks,
      clearFilters,
    },
    dispatch
  );

const mapStateToProps = state => ({
  filtersOpen: state.navigation.filtersOpen,
  tasks: state.task.tasks,
  currentTask: state.task.currentTask,
  currentTaskTime: state.task.currentTaskTime,
  categories: state.category.categories,
  filter: state.task.filter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
