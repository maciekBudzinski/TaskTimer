import React from 'react';
import { Card, Text, View, Content, Icon } from 'native-base';

const TaskCard = props => (
  <Content style={{ padding: 5 }}>
    <Card>
      <View style={{ paddingVertical: 5, paddingHorizontal: 5 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Data</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="square" style={{ fontSize: 20, color: 'red', paddingRight: 5 }} />
            <Text>Kategoria</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 24, fontWeight: '400' }}>Nazwa</Text>
          <Text style={{ fontSize: 24, fontWeight: '400' }}>Czas</Text>
        </View>
      </View>
    </Card>
  </Content>
);

TaskCard.propTypes = {};

export default TaskCard;
