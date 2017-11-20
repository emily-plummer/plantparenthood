import React from 'react';


const Form = () => (
  <form>
    <label for='name'>Plant Name</label>
    <input id='name' type="text"/>
    <label for='sow'>When should this plant be planted? (weeks before/after frost)</label>
    <input id='sow' type="text"/>
    <label for='spacing'>Spacing</label>
    <input id='spacing' type="text"/>
    <label for='germ'>Days to germination</label>
    <input id='germ' type="text"/>
  </form>
);

export default Form;
