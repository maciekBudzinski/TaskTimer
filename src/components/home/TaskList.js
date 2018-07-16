import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon, Content } from 'native-base';
import { ScrollView, View } from 'react-native';
import momentPropTypes from 'react-moment-proptypes';
import TaskContainer from '../../containers/TaskContainer';

const TaskList = ({ tasks, currentTask, currentTaskTime }) => {
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));

  return (
    <View>
      {/* <View>
        {currentTask && <TaskContainer {...currentTask} taskActive currentTaskTime={currentTaskTime} />}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 5,
          }}
        >
          <Icon name="time" />
          <Text style={{ paddingLeft: 5, fontSize: 20 }}>Poprzednie zadania</Text>
        </View>
      </View> */}
      {tasks.Length !== 0 ? tasks.map(t => <TaskContainer key={t.pk} {...t} />) : <Text>Brak zadań </Text>}
    </View>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  currentTask: PropTypes.object,
  currentTaskTime: momentPropTypes.momentObj,
};

TaskList.defaultProps = {
  tasks: [],
  currentTask: null,
  currentTaskTime: null,
};

export default TaskList;
