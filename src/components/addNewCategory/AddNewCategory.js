import React from 'react';
import { Container } from 'native-base';
import AddNewCategoryForm from './AddNewCategoryForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const AddNewCategory = () => (
  <Container>
    <AppHeaderScreen title="Dodaj kategorię" />
    <AddNewCategoryForm />
  </Container>
);

export default AddNewCategory;
