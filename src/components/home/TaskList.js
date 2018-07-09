import React from 'react';
import PropTypes from 'prop-types';
import { List, Separator, Text, Icon } from 'native-base';
import styles from '../../helpers/styles';
import TaskContainer from '../../containers/TaskContainer';

const TaskList = ({ tasks, currentTask }) => {
  tasks.sort((a, b) => +new Date(b.StartTime) - +new Date(a.StartTime));

  return (
    <List>
      <TaskContainer {...currentTask} taskActive />
      <Separator bordered style={[styles.zeroPadding, styles.listSeparator]}>
        <Icon name="time" />
        <Text style={[styles.listSeparatorText, { paddingLeft: 5 }]}>Poprzednie zadania</Text>
      </Separator>
      {tasks && tasks.map(t => <TaskContainer key={t.pk} {...t} />)}
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
