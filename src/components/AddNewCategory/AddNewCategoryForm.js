import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  ListItem,
  CheckBox,
  Body,
  Button,
} from 'native-base';

class AddNewCategoryForm extends Component {
  state = {
    categoryName: '',
    categoryColor: '',
  };

  render() {
    const { categoryName, categoryColor } = this.state;
    return (
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Nazwa kategorii</Label>
            <Input
              value={categoryName}
              onChangeText={text => this.setState({ categoryName: text })}
            />
          </Item>
          <Item stackedLabel>
            <Label>Kolor kategori dsasdai</Label>
            <Input
              value={categoryColor}
              onChangeText={text => this.setState({ categoryColor: text })}
            />
          </Item>
          <Button
            style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
            primary
            // disabled={(categoryName && categoryColor) === ''}
          >
            <Text>Dodaj</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

AddNewCategoryForm.propTypes = {};

export default AddNewCategoryForm;
