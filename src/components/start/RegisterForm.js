import React from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  handleCheck = () => {
    const { rememberMe } = this.state;
    const currentState = rememberMe;
    this.setState({
      rememberMe: !currentState,
    });
  };

  render() {
    const { register } = this.props;
    const { firstName, lastName, email, password, repeatPassword } = this.state;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Imię</Label>
          <Input value={firstName} onChangeText={text => this.setState({ firstName: text })} />
        </Item>
        <Item stackedLabel>
          <Label>Nazwisko</Label>
          <Input value={lastName} onChangeText={text => this.setState({ lastName: text })} />
        </Item>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={text => this.setState({ email: text })} />
        </Item>
        <Item stackedLabel>
          <Label>Hasło</Label>
          <Input value={password} onChangeText={text => this.setState({ password: text })} />
        </Item>
        <Item stackedLabel>
          <Label>Powtórz hasło</Label>
          <Input
            value={repeatPassword}
            onChangeText={text => this.setState({ repeatPassword: text })}
          />
        </Item>
        <Button
          style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
          primary
          disabled={(firstName && lastName && email && password && repeatPassword) === ''}
          onPress={register}
        >
          <Text>Zarejestruj</Text>
        </Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterForm;
