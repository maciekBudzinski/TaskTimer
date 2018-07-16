import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Alert } from 'react-native';
import { Text, View, Icon, SwipeRow, Button } from 'native-base';
import momentPropTypes from 'react-moment-proptypes';
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
      <Button
        primary
        onPress={() => {
          Alert.alert(
            'Zatrzymywanie zadania',
            'Czy napewno chcesz zatrzymać zadanie?',
            [
              { text: 'Nieeeee' },
              {
                text: 'Zatrzymaj',
                onPress: () => {
                  stopTask(JSON.stringify(pk), moment().unix());
                },
              },
            ],
            { cancelable: false }
          );
        }}
      >
        <Icon active name="square" />
      </Button>
    );
  }
  return (
    <Button
      danger
      onPress={() => {
        Alert.alert(
          'Usuwanie zadania',
          'Czy napewno chcesz usunąć zadanie?',
          [
            { text: 'Niech zostanie' },
            {
              text: 'Usuń',
              onPress: () => {
                deleteTask(pk);
              },
            },
          ],
          { cancelable: false }
        );
      }}
    >
      <Icon active name="trash" />
    </Button>
  );
};

class CardBody extends React.Component {
  state = {
    categoryColor: '#000',
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
    const { ActivityName, StopTime, StartTime, taskActive, currentTaskTime } = this.props;
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
          <Text style={{ fontSize: 24, fontWeight: '400' }}>
            {ActivityName.length > 15 ? `${ActivityName.substring(0, 12)}...` : `${ActivityName}`}
          </Text>
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

OptionButton.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
  taskActive: PropTypes.bool.isRequired,
  pk: PropTypes.number.isRequired,
};

CardBody.propTypes = {
  ActivityName: PropTypes.string,
  Category: PropTypes.number,
  StartTime: PropTypes.string,
  taskActive: PropTypes.bool,
  StopTime: PropTypes.string,
  currentTaskTime: momentPropTypes.momentObj,
  categories: PropTypes.array.isRequired,
};

CardBody.defaultProps = {
  taskActive: false,
  ActivityName: '',
  StopTime: null,
  currentTaskTime: null,
  Category: null,
  StartTime: null,
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
