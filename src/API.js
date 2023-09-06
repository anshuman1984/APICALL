
import React, { useState, useEffect } from 'react';
import InputField from './component/InputField';

const TableComponent = () => {
  const [jsonData, setJsonData] = useState([{id:'',title:'',completed:''}]);
  const [show,setShow]=useState(0);
  const isHaveValue = show>0?true:false;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChildData = (data) => {
    // Update the parent component's state with the data from the child
    setShow(data);
  };
  return (
    <div>
      <center>
      <h1>JSON Data Table</h1>
      <InputField onDataUpdate={handleChildData}/>
     <div>
    {isHaveValue &&
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((value) => (
            (value.id<=show)&&
            <tr key={value.id}>
              <td>{value.id}</td>
              <td style={{textAlign:"left"}}>{capitalizeFirstLetter(value.title)}</td>
              <td>{value.completed?"YES":"NO"}</td>
            </tr>
          ))}
        </tbody>
      </table>
}</div>
      </center>
    </div>
  );
};

export default TableComponent;