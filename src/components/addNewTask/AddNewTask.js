import React from 'react';
import { Container, Content } from 'native-base';
import AddNewTaskForm from './AddNewTaskForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const AddNewTask = props => (
  <Container>
    <AppHeaderScreen title="Dodaj zadanie" stack />
    <Content>
      <AddNewTaskForm {...props} />
    </Content>
  </Container>
);

export default AddNewTask;
