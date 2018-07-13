import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Modal } from 'react-native';
import { Container, Content, Form, Picker, DatePicker, Label, Button, Header, Left, Icon, Body, Title, Right, Text, Toast } from 'native-base';
import momentPropTypes from 'react-moment-proptypes';
import styles from '../../helpers/styles';

class FilterModal extends React.Component {
  constructor(props) {
    const { filter } = props;

    super(props);
    this.state = {
      taskCategory: filter.category,
      startDate: filter.startDate,
      endDate: filter.endDate,
    };
  }

  onPickerChange = value => {
    this.setState({
      taskCategory: value,
    });
  };

  onStartDateChange = date => {
    const { touched } = this.state;
    this.setState({
      startDate: date,
      touched: { ...touched, startDate: true },
    });
  };

  onEndDateChange = date => {
    const { touched } = this.state;
    this.setState({
      endDate: date,
      touched: { ...touched, endDate: true },
    });
  };

  onSubmit = () => {
    const { filterTasks } = this.props;
    const { taskCategory, startDate, endDate } = this.state;
    filterTasks(taskCategory, startDate, endDate);
    Toast.show({
      text: 'Zastosowano filtry',
    });
  };

  onReset = () => {
    const { closeFilters, clearFilters } = this.props;
    clearFilters();
    closeFilters();
    Toast.show({
      text: 'Zresetowano filtry',
      buttonText: 'Ok',
    });
  };

  render() {
    const { closeFilters, categories } = this.props;
    const { taskCategory, startDate, endDate } = this.state;
    return (
      <Modal onRequestClose={closeFilters}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={closeFilters}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Wybierz filtry</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.onSubmit}>
                <Icon name="checkmark" />
              </Button>
              <Button transparent onPress={this.onReset}>
                <Icon name="refresh" />
              </Button>
            </Right>
          </Header>
          <Content style={{ margin: 20 }}>
            <Form>
              <Label>Kategoria</Label>
              <Picker
                mode="dialog"
                selectedValue={taskCategory}
                style={[styles.zeroMargin, styles.zeroPadding, { marginLeft: 10 }]}
                onValueChange={this.onPickerChange}
              >
                <Picker.Item label="Wszystkie" value={-1} />
                {categories && categories.map(c => <Picker.Item key={c.pk} label={c.CategoryName} value={c.pk} />)}
              </Picker>

              <Label style={{ paddingVertical: 10 }}>Data początkowa</Label>
              <DatePicker
                defaultDate={startDate}
                locale="pl"
                androidMode="spinner"
                placeHolderText="Wybierz datę"
                placeHolderTextStyle={[styles.zeroMargin, styles.zeroPadding, { color: 'gray' }]}
                textStyle={[styles.zeroMargin, styles.zeroPadding, { color: 'green' }]}
                onDateChange={this.onStartDateChange}
              />
              {startDate && <Text style={{ fontSize: 16, paddingLeft: 10 }}>Wybrana data: {moment(startDate).format('DD.MM.YYYY')}</Text>}
              <Label style={{ paddingVertical: 10 }}>Data końcowa</Label>
              <DatePicker
                locale="pl"
                androidMode="spinner"
                placeHolderText="Wybierz datę"
                placeHolderTextStyle={[styles.zeroMargin, styles.zeroPadding, { color: 'gray' }]}
                textStyle={[styles.zeroMargin, styles.zeroPadding, { color: 'green' }]}
                onDateChange={this.onEndDateChange}
              />
              {endDate && <Text style={{ fontSize: 16, paddingLeft: 10 }}>Wybrana data: {moment(endDate).format('DD.MM.YYYY')}</Text>}
            </Form>
          </Content>
        </Container>
      </Modal>
    );
  }
}
FilterModal.propTypes = {
  filter: PropTypes.shape({
    category: PropTypes.number.isRequired,
    startDate: momentPropTypes.momentObj,
    endDate: momentPropTypes.momentObj,
  }).isRequired,
  closeFilters: PropTypes.func.isRequired,
  filterTasks: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default FilterModal;
