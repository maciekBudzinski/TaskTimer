import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import styles from '../../helpers/styles';

const stopTask = () => {
  alert('Zatrzymano zadanie');
};

const deleteTask = () => {
  alert('Usunięto zadanie');
};

const TaskCard = ({ taskActive, ...props }) => (
  <View style={{ paddingVertical: 2 }}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      style={[styles.zeroPadding, { marginHorizontal: 1 }]}
      left={taskActive ? <StopButton /> : <DeleteButton />}
      body={<CardBody {...props} />}
      right={taskActive ? <StopButton /> : <DeleteButton />}
    />
  </View>
);

const DeleteButton = () => (
  <Button danger onPress={deleteTask}>
    <Icon active name="trash" />
  </Button>
);

const StopButton = () => (
  <Button primary onPress={stopTask}>
    <Icon active name="square" />
  </Button>
);

const CardBody = ({ ActivityName, Category, StopTime, StartTime, pk, taskActive }) => {
  const timeDiff = moment(moment(StopTime).diff(StartTime)).add(-1, 'hours');
  return (
    <View style={{ flex: 1, padding: 5, borderWidth: 1, borderColor: 'grey' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{moment(StartTime).format('DD.MM.YYYY, HH:mm:ss')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="bookmark" style={{ fontSize: 25, color: 'red', paddingRight: 5 }} />
          <Text>{Category}</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 24, fontWeight: '400' }}>{ActivityName}</Text>
        <Text style={{ fontSize: 24, fontWeight: '400' }}>
          {moment(timeDiff).format('HH:mm:ss')}
        </Text>
      </View>
    </View>
  );
};

TaskCard.propTypes = {
  taskActive: PropTypes.bool,
};

TaskCard.defaultProps = {
  taskActive: false,
};

export default TaskCard;
