import React from 'react';


const PlantList = ({ plants }) => {
  return(
    <ul>
      {plants.map(plant => <li>{plant.name}</li>)}
    </ul>
  )
};

export default PlantList;
