import React from 'react';
import { View } from 'native-base';
import ReportChart from './ReportChart';
import ReportLegend from './ReportLegend';

const Report = props => (
  <View>
    <ReportChart {...props} />
    <ReportLegend {...props} />
  </View>
);
export default Report;
