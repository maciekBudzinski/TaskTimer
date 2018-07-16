import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fab, Icon, Content, View, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import momentPropTypes from 'react-moment-proptypes';
import FilterModal from './FilterModal';
import AppHeaderScreen from '../../containers/AppHeaderScreen';
import TaskList from './TaskList';
import TaskContainer from '../../containers/TaskContainer';

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
    <View>
      {currentTask && <TaskContainer {...currentTask} taskActive currentTaskTime={currentTaskTime} />}
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 5,
        }}
      >
        <Icon name="time" />
        <Text style={{ paddingLeft: 5, fontSize: 20 }}>Poprzednie zadania</Text>
      </View>
    </View>
    <Content>
      <TaskList tasks={filter.active ? filter.tasks : tasks} currentTaskTime={currentTaskTime} currentTask={currentTask} deleteTask={deleteTask} />
    </Content>
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
