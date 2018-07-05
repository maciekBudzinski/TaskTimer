import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import {
  Container,
  Content,
  Form,
  Picker,
  DatePicker,
  Label,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

class FilterModal extends React.Component {
  state = {
    taskCategory: '',
    startDate: new Date(),
    endDate: new Date(),
  };

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
    const { taskCategory, startDate, endDate } = this.state;
    console.log(taskCategory, startDate, endDate);
  };

  render() {
    const { closeFilters } = this.props;
    const { taskCategory } = this.state;
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
            </Right>
          </Header>
          <Content style={{ margin: 20 }}>
            <Form style={{ flex: 3 }}>
              <Label>Kategoria</Label>
              <Picker
                mode="dialog"
                selectedValue={taskCategory}
                onValueChange={this.onPickerChange}
              >
                <Picker.Item label="Jedzenie" value="1" />
                <Picker.Item label="Praca" value="6" />
                <Picker.Item label="Wolne" value="2" />
              </Picker>
              <Label>Data początkowa</Label>
              <DatePicker
                locale="pl"
                androidMode="spinner"
                placeHolderText="Wybierz datę początkową..."
                placeHolderTextStyle={{ fontSize: 16 }}
                textStyle={{ fontSize: 16 }}
                onDateChange={this.onStartDateChange}
              />
              <Label>Data końcowa</Label>
              <DatePicker
                locale="pl"
                androidMode="spinner"
                placeHolderText="Wybierz datę końcową..."
                placeHolderTextStyle={{ fontSize: 16 }}
                textStyle={{ fontSize: 16 }}
                onDateChange={this.onEndDateChange}
              />
            </Form>
          </Content>
        </Container>
      </Modal>
    );
  }
}
FilterModal.propTypes = {
  closeFilters: PropTypes.func.isRequired,
};

export default FilterModal;
