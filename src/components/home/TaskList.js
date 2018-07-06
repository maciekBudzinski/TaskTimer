import React from 'react';
import { List, ListItem, Content, Separator, Text, Icon } from 'native-base';
import TaskCard from '../common/TaskCard';
import styles from '../../helpers/styles';

const sort = array => {};

const TaskList = ({ tasks }) => {
  console.log(tasks);
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));
  console.log(tasks);
  return (
    <List>
      {tasks && tasks.map(t => <TaskCard key={t.pk} {...t} />)}
      <Separator bordered style={[styles.zeroPadding, styles.listSeparator]}>
        <Icon name="time" />
        <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
      </Separator>
    </List>
  );
};

export default TaskList;
