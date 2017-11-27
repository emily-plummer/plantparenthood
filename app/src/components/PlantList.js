import React from 'react';
import uuid from 'uuid';


const PlantList = ({ plants }) => {
  return(
    <table>
      <tbody>
        <tr>
          <th>Plant</th>
          <th>Type</th>
          <th>Seeds Ordered</th>
          <th>Days to Germination</th>
          <th>Spacing</th>
          <th>Sow Date</th>
        </tr>
        {plants.map(plant =>
          <tr key={uuid()}>
            <td>{plant.name}</td>
            <td>{plant.type}</td>
            <td>{plant.seeds_ordered}</td>
            <td>{plant.days_to_germ}</td>
            <td>{plant.spacing}</td>
            <td>{plant.sow}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
};

export default PlantList;
