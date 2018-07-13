import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportDate from '../components/reportDate/ReportDate';
import { getReport } from '../modules/report/actions';

class ReportDateScreen extends Component {
  render() {
    return <ReportDate {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getReport }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ReportDateScreen);
