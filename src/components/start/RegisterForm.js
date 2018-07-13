import React from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleCheck = () => {
    const { rememberMe } = this.state;
    const currentState = rememberMe;
    this.setState({
      rememberMe: !currentState,
    });
  };

  registeration = (firstName, lastName, email, password, confirmPassword) => {
    const { customerRegistration } = this.props;
    if ((firstName, lastName, email, password, confirmPassword)) {
      customerRegistration(firstName, lastName, email, password, confirmPassword);
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.state;
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
          <Input value={confirmPassword} onChangeText={text => this.setState({ confirmPassword: text })} />
        </Item>
        <Button
          style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
          primary
          disabled={(firstName && lastName && email && password && confirmPassword) === ''}
          onPress={() => this.registeration(firstName, lastName, email, password, confirmPassword)}
        >
          <Text>Zarejestruj</Text>
        </Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  customerRegistration: PropTypes.func.isRequired,
};
export default RegisterForm;
