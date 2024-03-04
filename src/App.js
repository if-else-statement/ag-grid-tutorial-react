import React, { useState, useEffect } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function App() {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('YOUR API DOG URL')
      .then(response => response.json())
      .then(data => setRowData(data))
  }, []);

  const columnDefs = [
    {field: "productId"},
    {field: "productName"},
    {field: "productPrice", filter: true, cellStyle: (params) => (params.value < 800) ? {color: 'green'} : null},
    {field: "isAvailable"},
    {field: "productSize"},
    {field: "action", cellRenderer: (params) => (
      <a onClick={() => console.log(params.data)}>Click Me</a>
    )}    
  ];

  return (
    <div className="ag-theme-quartz" style={{height: '500px'}}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
}

export default App;
