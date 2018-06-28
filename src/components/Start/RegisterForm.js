import React from 'react';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  CheckBox,
  Body,
  ListItem,
  Container,
} from 'native-base';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  state = {
    rememberMe: true,
    email: '',
    password: '',
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
    const { email, password, rememberMe } = this.state;
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={text => this.setState({ email: text })} />
        </Item>
        <Item floatingLabel>
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
          onPress={register}
        >
          <Text>Zaloguj</Text>
        </Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};
export default RegisterForm;
