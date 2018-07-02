import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

const Title = ({ currentForm }) => (
  <Text style={{ display: 'flex', alignSelf: 'center', fontSize: 32, fontWeight: '600' }}>
    {currentForm === 'login' && 'Zaloguj się'}
    {currentForm === 'register' && 'Zarejestruj się'}
  </Text>
);

Title.propTypes = {
  currentForm: PropTypes.string.isRequired,
};

export default Title;
