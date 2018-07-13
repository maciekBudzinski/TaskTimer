import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fab, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import momentPropTypes from 'react-moment-proptypes';
import FilterModal from './FilterModal';
import AppHeaderScreen from '../../containers/AppHeaderScreen';
import TaskList from './TaskList';

const Home = ({
  navigation,
  closeFilters,
  filtersOpen,
  tasks,
  currentTask,
  currentTaskTime,
  deleteTask,
  categories,
  filterTasks,
  clearFilters,
  filter,
}) => (
  <Container>
    <AppHeaderScreen title="Twoje zadania" withFilter />
    {filtersOpen && (
      <FilterModal closeFilters={closeFilters} categories={categories} filterTasks={filterTasks} clearFilters={clearFilters} filter={filter} />
    )}
    <TaskList tasks={filter.active ? filter.tasks : tasks} currentTaskTime={currentTaskTime} currentTask={currentTask} deleteTask={deleteTask} />
    {!currentTask && (
      <Fab style={{ backgroundColor: `#4050B5` }} onPress={() => navigation.navigate('AddNewTask')}>
        <Icon name="add" />
      </Fab>
    )}
  </Container>
);

Home.propTypes = {
  categories: PropTypes.array.isRequired,
  clearFilters: PropTypes.func.isRequired,
  closeFilters: PropTypes.func.isRequired,
  currentTask: PropTypes.object,
  currentTaskTime: momentPropTypes.momentObj,
  deleteTask: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  filterTasks: PropTypes.func.isRequired,
  filtersOpen: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Home.defaultProps = {
  currentTask: null,
  currentTaskTime: null,
};

export default withNavigation(Home);
