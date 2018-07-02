import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

const AppHeader = ({ title, navigation }) => {
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
      <Right />
    </Header>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(AppHeader);
