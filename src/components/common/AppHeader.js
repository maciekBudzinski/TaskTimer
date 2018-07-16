import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

const AppHeader = ({ title, navigation, withFilter, openFilters, stack }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Header>
      <Left>
        <Button onPress={stack ? goBack : openMenu} transparent>
          <Icon name={stack ? 'arrow-back' : 'menu'} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {withFilter && (
          <Button transparent onPress={openFilters}>
            <Icon name="funnel" />
          </Button>
        )}
      </Right>
    </Header>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.bool,
  openFilters: PropTypes.func,
  withFilter: PropTypes.bool,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

AppHeader.defaultProps = {
  withFilter: false,
  stack: false,
  openFilters: () => {},
};

export default withNavigation(AppHeader);
