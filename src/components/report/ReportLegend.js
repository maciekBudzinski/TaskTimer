import React from 'react';
import { List, ListItem, Text, Icon, View } from 'native-base';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';

const ReportLegend = ({ reportData, categories }) => {
  // const dat = reportData.map(rd => ({ key: rd.categoryId, amount: rd.time, svg: { fill: _.find(categories, { pk: rd.categoryId }).Color } }));
  const data = reportData.map(rd => ({ ...rd, category: _.find(categories, { pk: rd.categoryId }) }));
  console.log(data);
  return (
    <View>
      <Text style={{ alignSelf: 'center', fontWeight: '500', paddingTop: 10 }}>Legenda</Text>
      <List>
        {data.map(e => (
          <ListItem key={e.time} style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon name="bookmark" style={{ color: `${e.category.Color}` }} />
            <Text>
              {'  '}
              {e.category.CategoryName}
            </Text>
            <Text>
              {'  '}
              {moment(moment.unix(e.time).add(-1, 'hours')).format('HH:mm:ss')}
            </Text>
          </ListItem>
        ))}
      </List>
    </View>
  );
};

ReportLegend.propTypes = {
  reportData: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ReportLegend;
