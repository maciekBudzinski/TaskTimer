import React from 'react';
import { List, ListItem, Content, Separator, Text, Icon } from 'native-base';
import TaskCard from '../common/TaskCard';
import styles from '../../helpers/styles';

const TaskList = () => (
  <List>
    <TaskCard taskActive />
    <Separator bordered style={[styles.zeroPadding, styles.listSeparator]}>
      <Icon name="time" />
      <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
    </Separator>
    <TaskCard />
    <TaskCard />
    <TaskCard />
  </List>
);

export default TaskList;
