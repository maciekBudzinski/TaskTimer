import React, { Component } from 'react';
import { Content, Text, Form, Item, Label, Input, Button, View } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';
import PropTypes from 'prop-types';
import rgb from 'hsv-rgb';
import rgbHex from 'rgb-hex';

class AddNewCategoryForm extends Component {
  state = {
    categoryName: '',
    categoryColor: '#00ee00',
  };

  onChange = (hM, s, v) => {
    let h = hM;
    if (hM < 0) {
      h += 360;
    }
    const rgbColor = rgb(h, s, v);
    const hexColor = rgbHex(rgbColor[0], rgbColor[1], rgbColor[2]);
    const hexColorToState = `#${hexColor}`;
    this.setState({
      categoryColor: hexColorToState,
    });
  };

  onSubmit = () => {
    const { categoryName, categoryColor } = this.state;
    const { addCategory } = this.props;
    addCategory(categoryName, categoryColor);
  };

  render() {
    const { categoryName } = this.state;
    return (
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Nazwa</Label>
            <Input value={categoryName} onChangeText={text => this.setState({ categoryName: text })} />
          </Item>
          <Item stackedLabel>
            <Label>Kolor kategorii</Label>
            <View style={{ alignItems: 'center', height: 250 }}>
              <ColorWheel
                style={{ height: 200, width: 200 }}
                initialColor="#00ee00"
                onColorChange={color => this.onChange(color.h, color.s, color.v)}
              />
            </View>
          </Item>
          <Button style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }} primary onPress={this.onSubmit}>
            <Text>Dodaj</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

AddNewCategoryForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddNewCategoryForm;
