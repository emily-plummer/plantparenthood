import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ onSubmitClick }) => {
  let input;
  return (
    <form>
      <label for='name'>Plant Name</label>
      <input id='name' type="text"/>
      <button onClick={onSubmitClick}>Submit</button>
    </form>
  )
};

Form.PropTypes = {
  onSubmitClick: PropTypes.func,
}

export default Form;
