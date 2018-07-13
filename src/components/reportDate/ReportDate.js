import React from 'react';
import { Container, Content } from 'native-base';
import ReportDateForm from './ReportDateForm';
import AppHeaderScreen from '../../containers/AppHeaderScreen';

const ReportDate = props => (
  <Container>
    <AppHeaderScreen title="Report" />
    <Content>
      <ReportDateForm {...props} />
    </Content>
  </Container>
);

export default ReportDate;
