import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // getAllUsers();

  // Fetch all users @ mount
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
          console.log('Error: Data not fetched successfully');
        }
        const fetchedData = await response.json();
        console.log('Data:', fetchedData);
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className='App'>
      <p>Hi</p>
      <div>
        {data.map((obj) => (
          <div key={obj.first_name}>{obj.first_name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
