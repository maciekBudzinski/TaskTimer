import React from 'react';
import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import styles from '../../helpers/styles';

const TaskCard = props => (
  <View style={{ paddingVertical: 2 }}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      style={[styles.zeroPadding, { marginHorizontal: 1 }]}
      left={<DeleteButton />}
      body={<CardBody />}
      right={<DeleteButton />}
    />
  </View>
);

const DeleteButton = () => (
  <Button danger>
    <Icon active name="trash" />
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

TaskCard.propTypes = {};

export default TaskCard;
