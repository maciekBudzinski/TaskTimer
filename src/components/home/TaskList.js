import React from 'react';
import PropTypes from 'prop-types';
import { List, Separator, Text, Icon } from 'native-base';
import { ScrollView, View } from 'react-native';
import styles from '../../helpers/styles';
import TaskContainer from '../../containers/TaskContainer';

const TaskList = ({ tasks, currentTask }) => {
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 0, width: `100%` }}>
        {currentTask && <TaskContainer {...currentTask} taskActive />}
        <Separator bordered style={[styles.zeroPadding, styles.listSeparator, { zIndex: 10 }]}>
          <Icon name="time" />
          <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
        </Separator>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <List>{tasks && tasks.map(t => <TaskContainer key={t.pk} {...t} />)}</List>
        </View>
      </ScrollView>
    </View>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  currentTask: PropTypes.object,
  currentTaskTime: PropTypes.instanceOf(Date),
};

TaskList.defaultProps = {
  tasks: [],
  currentTask: null,
  currentTaskTime: null,
};

export default TaskList;
