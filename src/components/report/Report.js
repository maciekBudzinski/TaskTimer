import React from 'react';
import { Text, View } from 'native-base';
import { PieChart } from 'react-native-svg-charts';

const Report = ({ categories, reportData }) => {
  const data = reportData.map(rd => ({ key: rd.categoryId, amount: rd.time, svg: { fill: '#600080' } }));
  console.log(data);
  return (
    <View>
      <Text>Report</Text>
      <PieChart style={{ height: 200 }} valueAccessor={({ item }) => item.amount} data={data} spacing={0} outerRadius="95%" />
    </View>
  );
};
export default Report;
