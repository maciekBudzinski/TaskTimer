import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from 'native-base';
import AppHeader from '../../common/AppHeader';

const Home = props => (
  <Container>
    <AppHeader title="das" />
    <Text>Tu jes home</Text>
  </Container>
);

Home.propTypes = {};

export default Home;
