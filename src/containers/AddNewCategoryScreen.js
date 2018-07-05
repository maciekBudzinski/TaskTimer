import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddNewCategory from '../components/addNewCategory/AddNewCategory';
import { addCategory } from '../modules/categories/actions';

class AddNewCategoryScreen extends Component {
  render() {
    return <AddNewCategory {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addCategory }, dispatch);

const mapStateToProps = state => ({
  isLoading: state.category.isLoading,
  isSuccess: state.category.isSuccess,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewCategoryScreen);
