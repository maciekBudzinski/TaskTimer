import React, { Component } from 'react';
import { Content, Text, Form, Item, Label, Input, Button, View } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';

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
            <Label>Nazwa</Label>
            <Input
              value={categoryName}
              onChangeText={text => this.setState({ categoryName: text })}
            />
          </Item>
          <Item stackedLabel>
            <Label>Kolor kategorii</Label>
            <View style={{ alignItems: 'center', height: 250 }}>
              <ColorWheel initialColor="#00ee00" style={{ height: 200, width: 200 }} />
            </View>
          </Item>
          <Button style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }} primary>
            <Text>Dodaj</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

AddNewCategoryForm.propTypes = {};

export default AddNewCategoryForm;
