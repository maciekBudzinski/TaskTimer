import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import PropTypes from 'prop-types';

const ChangeFormLink = ({ currentForm, changeForm }) => (
  <View style={{ alignSelf: 'center' }}>
    <Text style={{ alignSelf: 'center' }}>Lub</Text>
    {currentForm === 'login' && (
      <Button transparent onPress={() => changeForm('register')}>
        <Text style={{ alignSelf: 'center', fontWeight: '600' }}>Załóż konto</Text>
      </Button>
    )}
    {currentForm === 'register' && (
      <Button transparent onPress={() => changeForm('login')}>
        <Text style={{ alignSelf: 'center', fontWeight: '600' }}>Zaloguj się</Text>
      </Button>
    )}
  </View>
);

ChangeFormLink.propTypes = {
  currentForm: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default ChangeFormLink;
