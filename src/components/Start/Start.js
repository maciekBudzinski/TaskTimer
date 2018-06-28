import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button } from 'native-base';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Title from './Title';
import ChangeFormLink from './ChangeFormLink';

class Start extends React.Component {
  login = () => {
    // Tutaj akcja z reduxa, if ok to navigate
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  register = () => {
    // Tutaj akcja z reduxa, if ok to navigate
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <Content>
          <Title />
          {/* <LoginForm login={this.login} /> */}
          <RegisterForm register={this.register} />
          <ChangeFormLink />
        </Content>
      </Container>
    );
  }
}

Start.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Start;
