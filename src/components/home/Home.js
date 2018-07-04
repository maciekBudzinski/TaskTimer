import React from 'react';
import PropTypes from 'prop-types';
import { Container, Fab, Icon, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import TaskCard from '../common/TaskCard';
import FilterModal from './FilterModal';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const Home = ({ navigation, closeFilters, filtersOpen }) => (
  <Container>
    <AppHeaderScreen title="Twoje zadania" withFilter />
    <Content>
      {filtersOpen && <FilterModal closeFilters={closeFilters} />}
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </Content>
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
};

export default withNavigation(Home);
