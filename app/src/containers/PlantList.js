import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers';
import PlantList from '../components/PlantList';

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps)(PlantList);
