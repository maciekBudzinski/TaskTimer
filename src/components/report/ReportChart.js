import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-native-svg-charts';
import _ from 'lodash';

const ReportChart = ({ categories, reportData }) => {
  const data = reportData.map(rd => ({ key: rd.categoryId, amount: rd.time, svg: { fill: _.find(categories, { pk: rd.categoryId }).Color } }));

  return <PieChart style={{ height: 300 }} valueAccessor={({ item }) => item.amount} data={data} spacing={0} outerRadius="95%" />;
};
ReportChart.propTypes = {
  categories: PropTypes.array.isRequired,
  reportData: PropTypes.array.isRequired,
};

export default ReportChart;
