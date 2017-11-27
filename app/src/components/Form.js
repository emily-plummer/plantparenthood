import React from 'react';
import PropTypes from 'prop-types';
import '../css/Form.css';


const Form = ({ onSubmitClick }) => {
  let input;
  return (
    <form className="plantForm">
      <h1>Add Plant</h1>
      <div>
        <label htmlFor='name'>Name:</label>
        <input className="formInput" id='name' type="text"/>
      </div>
      <div>
        <label htmlFor='type'>Type:</label>
        <input className="formInput" id='type' type="text"/>
      </div>
      <div>
        <label htmlFor='numSeeds'>Number of Seeds:</label>
        <input className="formInput" id='numSeeds' type="text"/>
      </div>
      <div>
        <label htmlFor='daysToGerm'>Days to Germination:</label>
        <input className="formInput" id='daysToGerm' type="text"/>
      </div>
      <div>
        <label htmlFor='weeksToTransplant'>Weeks to Transplant:</label>
        <input className="formInput" id='weeksToTransplant' type="text"/>
      </div>
      <div>
        <label htmlFor='sow'>Transplant Date:</label>
        <input className="formInput" id='sow' type="text"/>
      </div>
      <div>
        <label htmlFor='directSeed'>Direct Seed?</label>
        <input className="formInput" id='directSeed' type="text"/>
      </div>
      <div>
        <label htmlFor='spacing'>Spacing:</label>
        <input className="formInput" id='spacing' type="text"/>
      </div>
      <div>
        <label htmlFor='daysToHarvest'>Days to Harvest:</label>
        <input className="formInput" id='daysToHarvest' type="text"/>
      </div>
      <div>
        <label htmlFor='harvestNotes'>Harvest Notes:</label>
        <input className="formInput" id='harvestNotes' type="text"/>
      </div>
      <div>
        <label htmlFor='generalNotes'>General Notes:</label>
        <input className="formInput" id='generalNotes' type="text"/>
      </div>
      <button onClick={onSubmitClick}>Submit</button>
    </form>
  )
};

Form.PropTypes = {
  onSubmitClick: PropTypes.func,
}

export default Form;
