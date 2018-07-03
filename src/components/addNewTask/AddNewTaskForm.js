import { Form, Item, Label, Input, Picker, View, Text, Button, Icon } from 'native-base';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewTaskForm extends Component {
  state = {
    taskName: '',
    taskCategory: '',
  };

  onPickerChange = value => {
    this.setState({
      taskCategory: value,
    });
  };

  onSubmit = () => {
    const { taskName, taskCategory } = this.state;
    console.log(taskName, taskCategory);
  };

  render() {
    const { taskName, taskCategory } = this.state;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Nazwa zadania</Label>
          <Input value={taskName} onChangeText={text => this.setState({ taskName: text })} />
        </Item>
        <Label style={{ fontSize: 15, marginLeft: 15, color: '#575757' }}>Wybierz kategorię</Label>
        <Picker
          mode="dialog"
          selectedValue={taskCategory}
          style={{ marginLeft: 10 }}
          onValueChange={this.onPickerChange}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="6" />
          <Picker.Item label="Wallet" value="2" />
          <Picker.Item label="Wallet" value="3" />
          <Picker.Item label="Wallet" value="4" />
        </Picker>
        <Button
          iconLeft
          success
          style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
          onPress={this.onSubmit}
        >
          <Icon name="md-play" />
          <Text>Rozpocznij</Text>
        </Button>
      </Form>
    );
  }
}

AddNewTaskForm.propTypes = {};

export default AddNewTaskForm;
