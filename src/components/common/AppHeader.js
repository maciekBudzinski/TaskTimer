import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import FilterButton from './FilterButton';

const AppHeader = ({ title, navigation, withFilter, openFilters, closeFilters, filtersOpen }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Header>
      <Left>
        <Button onPress={openMenu} transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      {withFilter ? (
        <FilterButton
          openFilters={openFilters}
          closeFilters={closeFilters}
          filtersOpen={filtersOpen}
        />
      ) : (
        <Right />
      )}
    </Header>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  filtersOpen: PropTypes.bool.isRequired,
  openFilters: PropTypes.func.isRequired,
  closeFilters: PropTypes.func.isRequired,
  withFilter: PropTypes.bool,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

AppHeader.defaultProps = {
  withFilter: false,
};

export default withNavigation(AppHeader);
