import React from 'react';
import { Text, Container, Button } from 'native-base';
import { withNavigation } from 'react-navigation';

const RaportDate = ({ navigation }) => (
  <Container>
    <Text>RaportDate</Text>
    <Button onPress={() => navigation.navigate('Raport')}>
      <Text>Zobacz raport</Text>
    </Button>
  </Container>
);

export default withNavigation(RaportDate);
