import React from 'react';
import { Text, Container, Button, Content } from 'native-base';
import AppHeader from '../common/AppHeader';
import RaportDateForm from './RaportDateForm';

const RaportDate = () => (
  <Container>
    <AppHeader title="Raport" />
    <Content>
      <RaportDateForm />
    </Content>
  </Container>
);

export default RaportDate;
