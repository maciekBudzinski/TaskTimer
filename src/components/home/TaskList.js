import React from 'react';
import PropTypes from 'prop-types';
import { List, Separator, Text, Icon, Content, Label } from 'native-base';
import { ScrollView, View, StyleSheet } from 'react-native';
import styles from '../../helpers/styles';
import TaskContainer from '../../containers/TaskContainer';

const TaskList = ({ tasks, currentTask, currentTaskTime }) => {
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));

  return (
    <View>
      {/* <View style={{ position: 'absolute', top: 0, width: `100%` }}>
        {currentTask && <TaskContainer {...currentTask} taskActive />}
        <Separator bordered style={[styles.zeroPadding, styles.listSeparator, { zIndex: 10 }]}>
          <Icon name="time" />
          <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
        </Separator>
      </View>
      <View style={{ position: 'relative', top: 0 }}>
        <ScrollView style={{ flex: 1 }}>
          <List>{tasks && tasks.map(t => <TaskContainer key={t.pk} {...t} />)}</List>
        </ScrollView>
      </View> */}
      {currentTask && <TaskContainer {...currentTask} taskActive currentTaskTime={currentTaskTime} />}
      {/* <Separator bordered style={[styles.zeroPadding, styles.listSeparator, { zIndex: 10 }]}> */}

      {/* <Separator style={{ height: 100 }}>
        <Icon name="time" />
        <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
      </Separator> */}
      <View
        style={{
          paddingVertical: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
        }}
      >
        <Icon name="time" />
        <Text style={{ paddingLeft: 5, fontSize: 20 }}>Poprzednie zadania</Text>
      </View>
      <ScrollView>{tasks && tasks.map(t => <TaskContainer key={t.pk} {...t} />)}</ScrollView>
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
