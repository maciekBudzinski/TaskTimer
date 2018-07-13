import { Form, Item, Label, Input, Picker, Text, Button, Icon } from 'native-base';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

class AddNewTaskForm extends Component {
  state = {
    taskName: '',
    taskCategory: null,
  };

  componentDidMount() {
    const { categories } = this.props;
    this.setState({
      taskCategory: categories[0].pk,
    });
  }

  onPickerChange = value => {
    this.setState({
      taskCategory: value,
    });
  };

  onSubmit = () => {
    const { addTask } = this.props;
    const { taskName, taskCategory } = this.state;
    addTask(taskName, taskCategory, moment().unix());
  };

  render() {
    const { categories } = this.props;
    const { taskName, taskCategory } = this.state;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Nazwa zadania</Label>
          <Input value={taskName} onChangeText={text => this.setState({ taskName: text })} />
        </Item>
        <Label style={{ fontSize: 15, marginLeft: 15, color: '#575757' }}>Wybierz kategorię</Label>
        <Picker mode="dialog" selectedValue={taskCategory} style={{ marginLeft: 10 }} onValueChange={this.onPickerChange}>
          {categories && categories.map(c => <Picker.Item key={c.pk} label={c.CategoryName} value={c.pk} />)}
        </Picker>
        <Button
          iconLeft
          success
          disabled={taskName === ''}
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

AddNewTaskForm.propTypes = {
  categories: PropTypes.array,
  addTask: PropTypes.func.isRequired,
};

AddNewTaskForm.defaultProps = {
  categories: [],
};

export default withNavigation(AddNewTaskForm);
