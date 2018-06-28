import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

const AppHeader = ({ title }) => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right />
  </Header>
);
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;
