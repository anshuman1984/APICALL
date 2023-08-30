
import React, { useState, useEffect } from 'react';

const TableComponent = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch JSON data (you can replace this with your own fetch logic)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(jsonData);
  return (
    <div>
      <h1>JSON Data Table</h1>
      <table border="1px solid green">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td style={{textAlign:"left"}}>{value.title}</td>
              <td>{value.completed?"YES":"NO"}</td>
            </tr>
            
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
 