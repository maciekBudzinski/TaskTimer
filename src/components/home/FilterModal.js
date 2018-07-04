import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import { Container, Text } from 'native-base';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const FilterModal = ({ closeFilters }) => (
  <Modal onRequestClose={closeFilters}>
    <Container>
      <AppHeaderScreen withFilter title="Wybierz filtry" />
      <Text>Wybierz filtry</Text>
    </Container>
  </Modal>
);

FilterModal.propTypes = {
  closeFilters: PropTypes.func.isRequired,
};

export default FilterModal;
