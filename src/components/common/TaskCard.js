import React from 'react';
import PropTypes from 'prop-types';
import moment, { now } from 'moment';
import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import styles from '../../helpers/styles';

const stopTask = ({ pk, stopTask }) => {
  alert('Zatrzymano zadanie');
};

const deleteTask = (pk, deleteTask) => {
  alert('Usunięto zadanie');
};

const TaskCard = ({
  taskActive,
  deleteTask,
  stopTask,
  getTasks,
  getCurrentTask,
  stopTaskAction,
  pk,
  ...props
}) => (
  <View style={{ paddingVertical: 2 }}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      style={[styles.zeroPadding, { marginHorizontal: 1 }]}
      left={
        taskActive ? (
          <StopButton
            stopTask={stopTaskAction}
            pk={pk}
            getTasks={getTasks}
            getCurrentTask={getCurrentTask}
          />
        ) : (
          <DeleteButton pk={pk} deleteTask={deleteTask} />
        )
      }
      body={<CardBody taskActive={taskActive} {...props} />}
      right={
        taskActive ? (
          <StopButton
            stopTask={stopTaskAction}
            pk={pk}
            getTasks={getTasks}
            getCurrentTask={getCurrentTask}
          />
        ) : (
          <DeleteButton pk={pk} deleteTask={deleteTask} />
        )
      }
    />
  </View>
);

const DeleteButton = ({ deleteTask, pk }) => (
  <Button danger onPress={() => deleteTask(pk)}>
    <Icon active name="trash" />
  </Button>
);

const StopButton = ({ stopTask, getTasks, getCurrentTask, pk }) => (
  <Button primary onPress={() => stopTask(JSON.stringify(pk), moment().unix())}>
    <Icon active name="square" />
  </Button>
);

const CardBody = ({
  ActivityName,
  Category,
  StopTime,
  StartTime,
  pk,
  taskActive,
  currentTaskTime,
}) => {
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
        {taskActive === true && (
          <Text style={{ fontSize: 24, fontWeight: '400', color: 'green' }}>
            {moment(moment(currentTaskTime).add(-1, 'hours')).format('HH:mm:ss')}
          </Text>
        )}
        {taskActive === false && (
          <Text style={{ fontSize: 24, fontWeight: '400' }}>
            {moment(timeDiff).format('HH:mm:ss')}
          </Text>
        )}
      </View>
    </View>
  );
};

CardBody.propTypes = {
  ActivityName: PropTypes.string,
  Category: PropTypes.number,
  StartTime: PropTypes.string,
  taskActive: PropTypes.bool,
  StopTime: PropTypes.string,
  pk: PropTypes.number,
  // currentTaskTime: PropTypes.instanceOf(Moment),
};

CardBody.defaultProps = {
  taskActive: false,
  ActivityName: '',
  StopTime: null,
  currentTaskTime: null,
  Category: null,
  StartTime: null,
  pk: null,
};

TaskCard.propTypes = {
  taskActive: PropTypes.bool,
  pk: PropTypes.number,
};

TaskCard.defaultProps = {
  taskActive: false,
  pk: null,
};

export default TaskCard;
