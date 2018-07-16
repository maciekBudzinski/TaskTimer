import React from 'react';
import { View, Container, Text, Content } from 'native-base';
import PropTypes from 'prop-types';
import ReportChart from './ReportChart';
import ReportLegend from './ReportLegend';
import AppHeader from '../common/AppHeader';

const Report = props => {
  const { reportData } = props;

  return (
    <Container>
      <AppHeader title="Raport" stack />
      {reportData.length > 0 ? (
        <Content>
          <ReportChart {...props} />
          <ReportLegend {...props} />
        </Content>
      ) : (
        <Text style={{ alignSelf: 'center', fontWeight: '500', paddingTop: 10, fontSize: 20 }}>Brak danych do wyświetlenia</Text>
      )}
    </Container>
  );
};

Report.propTypes = {
  reportData: PropTypes.array.isRequired,
};

export default Report;
