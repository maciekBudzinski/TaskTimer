import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Button,
  Left,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev mena',
  android: 'Double tap R on your keyboard to reload, Shake or prs menu button for dev menu',
});
function App() {
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
        <Button>
          <Text>click me</Text>
        </Button>
      </Content>
      <Footer />
    </Container>
  );
}
export default App;
