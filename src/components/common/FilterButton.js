import React from 'react';
import PropTypes from 'prop-types';
import { Right, Button, Icon } from 'native-base';

const FilterButton = ({ openFilters, closeFilters, filtersOpen }) => (
  <Right>
    <Button transparent onPress={filtersOpen ? closeFilters : openFilters}>
      <Icon name={filtersOpen ? 'close' : 'funnel'} />
    </Button>
  </Right>
);

FilterButton.propTypes = {
  filtersOpen: PropTypes.bool.isRequired,
  openFilters: PropTypes.func.isRequired,
  closeFilters: PropTypes.func.isRequired,
};

export default FilterButton;
