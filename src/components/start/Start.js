import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Title from './Title';
import ChangeFormLink from './ChangeFormLink';

const Start = ({ navigation, currentForm, changeForm, customerLogin, isAuthenticated, customerRegistration, isSuccess }) => (
  <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Content>
      <Title currentForm={currentForm} />
      {currentForm === 'login' && <LoginForm customerLogin={customerLogin} isAuthenticated={isAuthenticated} navigation={navigation} />}
      {currentForm === 'register' && <RegisterForm customerRegistration={customerRegistration} isSuccess={isSuccess} changeForm={changeForm} />}
      <ChangeFormLink currentForm={currentForm} changeForm={changeForm} />
    </Content>
  </Container>
);

Start.propTypes = {
  changeForm: PropTypes.func.isRequired,
  currentForm: PropTypes.string.isRequired,
  customerLogin: PropTypes.func.isRequired,
  customerRegistration: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Start;
