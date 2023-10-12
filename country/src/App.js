import React, { useState } from 'react';

import axios from 'axios';
import CountryList from './components/CountryList';

const API_URL = 'http://localhost:8080/country/';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(`${API_URL}${countryName}`);
      if (response.data) {
        setCountryData(response.data);
        setError(null);
      }
    } catch (error) {
      if( error.hasOwnProperty('response')){
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }    
      setCountryData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryData();
  };

  return (
    
    <div className="container mt-5">
      <h1 className="mb-4">Country Information App</h1>
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input required
          type="text"
          className="form-control"
          placeholder="Enter a country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchCountryData} type='submit' onSubmit={handleSubmit}>
          Get Info
        </button>
      
      </div>
      </form>
      {(countryData)?(<CountryList countryData={countryData} />) : (<p>{error}</p>)}
      

    </div>
  );
}

export default App;
