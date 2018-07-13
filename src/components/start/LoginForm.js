import React from 'react';
import { Form, Item, Input, Label, Button, Text, CheckBox, Body, ListItem } from 'native-base';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

class LoginForm extends React.Component {
  state = {
    rememberMe: true,
    email: 'user@user.pl',
    password: '1qaz!QAZ',
  };

  handleLoginSuccess = token => {
    const { navigation } = this.props;
    // FIX ME
    // eslint-disable-next-line
    const _storeData = async () => {
      await AsyncStorage.setItem('jwt', token);
    };
    axios.defaults.headers.common.Authorization = `${'Bearer '}${token}`;
    navigation.navigate('AppStack');
  };

  handleCheck = () => {
    const { rememberMe } = this.state;
    const currentState = rememberMe;
    this.setState({
      rememberMe: !currentState,
    });
  };

  login = () => {
    const { customerLogin } = this.props;
    const { email, password } = this.state;
    customerLogin(email, password);
  };

  render() {
    const { email, password, rememberMe } = this.state;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={text => this.setState({ email: text })} />
        </Item>
        <Item stackedLabel>
          <Label>Hasło</Label>
          <Input value={password} onChangeText={text => this.setState({ password: text })} />
        </Item>
        <ListItem>
          <CheckBox checked={rememberMe} onPress={this.handleCheck} />
          <Body>
            <Text>Zapamiętaj mnie</Text>
          </Body>
        </ListItem>
        <Button
          style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
          primary
          disabled={(email && password) === ''}
          onPress={this.login}
        >
          <Text>Zaloguj</Text>
        </Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  customerLogin: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default LoginForm;
