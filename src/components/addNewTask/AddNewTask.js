import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import AddNewTaskForm from './AddNewTaskForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const AddNewTask = () => (
  <Container>
    <AppHeaderScreen title="Dodaj zadanie" stack />
    <Content>
      <AddNewTaskForm />
    </Content>
  </Container>
);

export default AddNewTask;
