import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Fab, Icon, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import AppHeader from '../../common/AppHeader';
import TaskCard from '../../common/TaskCard';

const Home = props => (
  <Container>
    <AppHeader title="Twoje zadania" />
    <TaskCard />
    <Fab onPress={() => props.navigation.navigate('AddNewTask')}>
      <Icon name="add" />
    </Fab>
  </Container>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(Home);
