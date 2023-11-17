import React from 'react';
import './Table.css'; // Import your CSS file for styling

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Year}</td>
              <td>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
