import React, { Component } from 'react';
import { Text, Container, Content } from 'native-base';
import AddNewTaskForm from './AddNewTaskForm';
import AppHeader from '../common/AppHeader';

const AddNewTask = () => (
  <Container>
    <AppHeader title="Dodaj zadanie" />
    <Content>
      <AddNewTaskForm />
    </Content>
  </Container>
);

export default AddNewTask;
