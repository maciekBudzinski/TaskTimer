import React from 'react';
import { Button, Text, View, Icon } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { customerLogout } from '../../modules/customer/actions';

const LogoutButton = props => {
  const handleLogout = () => {
    const { navigation } = props;
    customerLogout();
    delete axios.defaults.headers.common.Authorization;
    props.customerLogout();
    navigation.navigate('Start');
  };
  return (
    <Button transparent style={{ width: `100%` }} onPress={() => handleLogout()}>
      <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 17 }}>
        <Icon name="log-out" style={{ fontSize: 28 }} />
        <Text
          style={{
            marginLeft: 32,
            marginTop: 3,
            color: `rgba(0,0,0,0.87)`,
            fontWeight: '500',
            fontSize: 14,
          }}
        >
          Wyloguj
        </Text>
      </View>
    </Button>
  );
};
LogoutButton.propTypes = {
  customerLogout: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ customerLogout }, dispatch);

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(LogoutButton)
);
