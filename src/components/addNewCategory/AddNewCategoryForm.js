import React, { Component } from 'react';
import { Content, Text, Form, Item, Label, Input, Button, View } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';

const rgb = require('hsv-rgb');

class AddNewCategoryForm extends Component {
  state = {
    categoryName: '',
    categoryColor: '#00ee00',
  };

  onChange = (hM, s, v) => {
    let h = hM;
    if (hM < 0) {
      console.log('ok');
      h += 360;
    }
    const rgbColor = rgb(h, s, v);
    const rgbColorToState = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`;
    this.setState({
      categoryColor: rgbColorToState,
    });
  };

  onSubmit = () => {
    const { categoryName, categoryColor } = this.state;
    const { addCategory, isSuccess, navigation } = this.props;
    console.log(categoryName, categoryColor);
    addCategory().then(() => {
      // eslint-disable-next-line
      isSuccess ? navigation.navigate('Home') : alert('Nie można dodać kategorii');
    });
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
              <ColorWheel
                style={{ height: 200, width: 200 }}
                initialColor="#00ee00"
                onColorChange={color => this.onChange(color.h, color.s, color.v)}
              />
            </View>
          </Item>
          <Button
            style={{ width: `100%`, alignItems: 'center', justifyContent: 'center' }}
            primary
            onPress={this.onSubmit}
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
