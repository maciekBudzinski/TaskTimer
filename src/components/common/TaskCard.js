import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import styles from '../../helpers/styles';

const TaskCard = ({ taskActive }) => (
  <View style={{ paddingVertical: 2 }}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      style={[styles.zeroPadding, { marginHorizontal: 1 }]}
      left={taskActive ? <StopButton /> : <DeleteButton />}
      body={<CardBody />}
      right={taskActive ? <StopButton /> : <DeleteButton />}
    />
  </View>
);

const DeleteButton = () => (
  <Button danger>
    <Icon active name="trash" />
  </Button>
);

const StopButton = () => (
  <Button primary>
    <Icon active name="square" />
  </Button>
);

const CardBody = () => (
  <View style={{ flex: 1, padding: 5, borderWidth: 1, borderColor: 'grey' }}>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>Data</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="square" style={{ fontSize: 20, color: 'red', paddingRight: 5 }} />
        <Text>Kategoria</Text>
      </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 24, fontWeight: '400' }}>Nazwa</Text>
      <Text style={{ fontSize: 24, fontWeight: '400' }}>Czas</Text>
    </View>
  </View>
);

TaskCard.propTypes = {
  taskActive: PropTypes.bool,
};

TaskCard.defaultProps = {
  taskActive: false,
};

export default TaskCard;
