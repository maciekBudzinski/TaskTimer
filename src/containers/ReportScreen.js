import React, { Component } from 'react';
import { connect } from 'react-redux';
import Report from '../components/report/Report';

class ReportScreen extends Component {
  render() {
    return <Report {...this.props} />;
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  reportData: state.report.data,
});

export default connect(
  mapStateToProps,
  null
)(ReportScreen);
