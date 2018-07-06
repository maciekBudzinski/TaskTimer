import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Content, Separator, Text, Icon } from 'native-base';
import TaskCard from '../common/TaskCard';
import styles from '../../helpers/styles';

const TaskList = ({ tasks, currentTask, currentTaskTime }) => {
  console.log(tasks);
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));
  console.log(tasks);
  return (
    <List>
      <TaskCard {...currentTask} currentTaskTime={currentTaskTime} taskActive />
      <Separator bordered style={[styles.zeroPadding, styles.listSeparator]}>
        <Icon name="time" />
        <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
      </Separator>
      {/* {tasks && tasks.map(t => <TaskCard key={t.pk} {...t} />)} */}
    </List>
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
