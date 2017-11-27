import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ onSubmitClick }) => {
  let input;
  return (
    <form>
      <h1>Add Plant</h1>
      <label htmlFor='name'>Name</label>
      <input id='name' type="text"/>
      <label htmlFor='type'>Type</label>
      <input id='type' type="text"/>
      <label htmlFor='numSeeds'>Number of Seeds</label>
      <input id='numSeeds' type="text"/>
      <label htmlFor='daysToGerm'>Days to Germination</label>
      <input id='daysToGerm' type="text"/>
      <label htmlFor='weeksToTransplant'>Weeks to Transplant</label>
      <input id='weeksToTransplant' type="text"/>
      <label htmlFor='sow'>Transplant Date (weeks before/after frost)</label>
      <input id='sow' type="text"/>
      <label htmlFor='directSeed'>Direct Seed?</label>
      <input id='directSeed' type="text"/>
      <label htmlFor='spacing'>Spacing</label>
      <input id='spacing' type="text"/>
      <label htmlFor='daysToHarvest'>Days to Harvest</label>
      <input id='daysToHarvest' type="text"/>
      <label htmlFor='harvestNotes'>Harvest Notes</label>
      <input id='harvestNotes' type="text"/>
      <label htmlFor='generalNotes'>General Notes</label>
      <input id='generalNotes' type="text"/>
      <button onClick={onSubmitClick}>Submit</button>
    </form>
  )
};

Form.PropTypes = {
  onSubmitClick: PropTypes.func,
}

export default Form;
