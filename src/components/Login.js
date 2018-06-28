import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Text,
  Button,
  Body,
  Right,
  Icon,
  Title,
} from 'native-base';

class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Navigate to home</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default Login;
