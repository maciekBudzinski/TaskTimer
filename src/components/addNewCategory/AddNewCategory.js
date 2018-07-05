import React from 'react';
import { Container } from 'native-base';
import AddNewCategoryForm from './AddNewCategoryForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const AddNewCategory = props => (
  <Container>
    <AppHeaderScreen title="Dodaj kategorię" />
    <AddNewCategoryForm {...props} />
  </Container>
);

export default AddNewCategory;
