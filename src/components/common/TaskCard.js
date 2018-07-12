import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import styles from '../../helpers/styles';

const TaskCard = ({ ...props }) => (
  <View style={{ paddingVertical: 2 }}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      style={[styles.zeroPadding, { marginHorizontal: 1 }]}
      left={<OptionButton {...props} />}
      body={<CardBody {...props} />}
      right={<OptionButton {...props} />}
    />
  </View>
);

const OptionButton = ({ deleteTask, stopTask, taskActive, pk }) => {
  if (taskActive) {
    return (
      <Button primary onPress={() => stopTask(JSON.stringify(pk), moment().unix())}>
        <Icon active name="square" />
      </Button>
    );
  }
  return (
    <Button danger onPress={() => deleteTask(pk)}>
      <Icon active name="trash" />
    </Button>
  );
};

class CardBody extends React.Component {
  state = {
    categoryColor: null,
    categoryName: null,
  };

  componentDidMount() {
    const { categories, Category } = this.props;
    if (categories && categories.length > 0) {
      const categoryIndex = categories.map(c => c.pk).indexOf(Category);
      const categoryName = categories[categoryIndex].CategoryName;
      const categoryColor = categories[categoryIndex].Color;
      this.setState({
        categoryName,
        categoryColor,
      });
    }
  }

  render() {
    console.log('render');
    const { ActivityName, Category, StopTime, StartTime, taskActive, currentTaskTime, categories } = this.props;
    const { categoryName, categoryColor } = this.state;
    const timeDiff = moment(moment(StopTime).diff(StartTime)).add(-1, 'hours');

    return (
      <View style={{ flex: 1, padding: 5, borderWidth: 1, borderColor: 'grey' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>
            {moment(moment(StartTime))
              .add(2, 'hours')
              .format('DD.MM.YYYY, HH:mm:ss')}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="bookmark" style={{ fontSize: 25, color: `${categoryColor}`, paddingRight: 5 }} />
            <Text>{categoryName}</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 24, fontWeight: '400' }}>{ActivityName}</Text>
          {taskActive === true && (
            <Text style={{ fontSize: 24, fontWeight: '400', color: 'green' }}>
              {/* {time} */}
              {moment(moment(currentTaskTime).add(-1, 'hours')).format('HH:mm:ss')}
            </Text>
          )}
          {taskActive === false && <Text style={{ fontSize: 24, fontWeight: '400' }}>{moment(timeDiff).format('HH:mm:ss')}</Text>}
        </View>
      </View>
    );
  }
}

CardBody.propTypes = {
  ActivityName: PropTypes.string,
  Category: PropTypes.number,
  StartTime: PropTypes.string,
  taskActive: PropTypes.bool,
  StopTime: PropTypes.string,
  pk: PropTypes.number,
  categories: PropTypes.array.isRequired,
  // currentTaskTime: PropTypes.instanceOf(Moment),
};

CardBody.defaultProps = {
  taskActive: false,
  pk: -1,
  ActivityName: '',
  StopTime: null,
  currentTaskTime: null,
  Category: null,
  StartTime: null,
  // categories: [],
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
