import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers';
import Form from '../components/Form';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (value) => {
      dispatch(actions.handleSubmitClick({
        plant: value,
      }));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
