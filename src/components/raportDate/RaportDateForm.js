import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Form, Button, Text, DatePicker, Label } from 'native-base';

class RaportDateForm extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    touched: {
      startDate: false,
      endDate: false,
    },
    correctDate: false,
  };

  onStartDateChange = date => {
    const { touched } = this.state;
    this.setState({
      startDate: date,
      touched: { ...touched, startDate: true },
    });
    this.checkDates();
  };

  onEndDateChange = date => {
    const { touched } = this.state;
    this.setState({
      endDate: date,
      touched: { ...touched, endDate: true },
    });
    this.checkDates();
  };

  onSubmit = () => {
    const { navigation } = this.props;
    // const { startDate, endDate } = this.state;
    navigation.navigate('Raport');
  };

  checkDates = () => {
    const { startDate, endDate } = this.state;
    if (startDate > endDate) {
      this.setState({
        correctDate: false,
      });
    } else {
      this.setState({
        correctDate: true,
      });
    }
  };

  render() {
    const { touched, correctDate } = this.state;
    return (
      <Form>
        <DatePicker
          locale="pl"
          androidMode="spinner"
          placeHolderText="Wybierz datę początkową..."
          placeHolderTextStyle={{ fontSize: 20, alignSelf: 'center' }}
          textStyle={{ fontSize: 20, fontWeight: '500', alignSelf: 'center' }}
          onDateChange={this.onStartDateChange}
        />
        <DatePicker
          locale="pl"
          androidMode="spinner"
          placeHolderText="Wybierz datę końcową..."
          placeHolderTextStyle={{ fontSize: 20, alignSelf: 'center' }}
          textStyle={{ fontSize: 20, fontWeight: '500', alignSelf: 'center' }}
          onDateChange={this.onEndDateChange}
        />
        <Button
          disabled={!(touched.startDate && touched.endDate && correctDate)}
          style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
          onPress={this.onSubmit}
        >
          <Text>Zobacz raport</Text>
        </Button>
        {!correctDate &&
          touched.startDate &&
          touched.endDate && <Label style={{ color: 'red', alignSelf: 'center', padding: 15 }}>Podałeś złe daty</Label>}
      </Form>
    );
  }
}

RaportDateForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(RaportDateForm);
