import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { closeFilters } from '../modules/navigation/actions';
import { getCategories } from '../modules/categories/actions';
import {
  getTasks,
  getCurrentTask,
  setCurrentTaskTime,
  iterateCurrentTaskTime,
  deleteTask,
} from '../modules/task/actions';
import Home from '../components/home/Home';

class HomeScreen extends Component {
  componentDidMount() {
    const { getCategories, getTasks } = this.props;
    getCategories();
    getTasks();
    // eslint-disable-next-line
    this.props.getCurrentTask()
      .then(() => {
        const { currentTask, setCurrentTaskTime } = this.props;
        const currentTimeDiff = moment(
          moment().diff(moment(currentTask.StartTime).add('2', 'hours'))
        );
        setCurrentTaskTime(currentTimeDiff);
      })
      .then(() => {
        const { iterateCurrentTaskTime } = this.props;
        setInterval(() => {
          const { currentTaskTime } = this.props;
          iterateCurrentTaskTime(moment(currentTaskTime).add(1, 'seconds'));
        }, 15000);
      });
  }

  render() {
    return <Home {...this.props} />;
  }
}
HomeScreen.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  getCurrentTask: PropTypes.func.isRequired,
  setCurrentTaskTime: PropTypes.func,
  iterateCurrentTaskTime: PropTypes.func,
  currentTask: PropTypes.object,
  currentTaskTime: PropTypes.instanceOf(Date),
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
    },
    dispatch
  );

const mapStateToProps = state => ({
  filtersOpen: state.navigation.filtersOpen,
  tasks: state.task.tasks,
  currentTask: state.task.currentTask,
  currentTaskTime: state.task.currentTaskTime,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
