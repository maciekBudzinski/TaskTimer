import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fab, Icon, Content, List, ListItem, Separator, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import TaskCard from '../common/TaskCard';
import FilterModal from './FilterModal';
import AppHeaderScreen from '../../containers/AppHeaderScreen';
import TaskList from './TaskList';
import TaskContainer from '../../containers/TaskContainer';

const Home = ({ navigation, closeFilters, filtersOpen, tasks, currentTask, currentTaskTime, deleteTask }) => (
  <Container>
    <AppHeaderScreen title="Twoje zadania" withFilter />
    {filtersOpen && <FilterModal closeFilters={closeFilters} />}
    <TaskList tasks={tasks} currentTaskTime={currentTaskTime} currentTask={currentTask} deleteTask={deleteTask} />
    <Fab style={{ backgroundColor: `#4050B5` }} onPress={() => navigation.navigate('AddNewTask')}>
      <Icon name="add" />
    </Fab>
  </Container>
);

Home.propTypes = {
  closeFilters: PropTypes.func.isRequired,
  filtersOpen: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  tasks: PropTypes.array.isRequired,
  currentTask: PropTypes.object,
  currentTaskTime: PropTypes.instanceOf(Date),
  deleteTask: PropTypes.func.isRequired,
};

Home.defaultProps = {
  currentTask: null,
  currentTaskTime: null,
};

export default withNavigation(Home);
