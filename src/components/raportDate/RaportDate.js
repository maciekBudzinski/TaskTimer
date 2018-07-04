import React from 'react';
import { Container, Content } from 'native-base';
import RaportDateForm from './RaportDateForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const RaportDate = () => (
  <Container>
    <AppHeaderScreen title="Raport" />
    <Content>
      <RaportDateForm />
    </Content>
  </Container>
);

export default RaportDate;
