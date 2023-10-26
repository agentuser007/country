import React, { useState } from 'react';

import axios from 'axios';
import CountryList from './components/CountryList';
import Loading from './components/Loading';
import Pagination from './components/Pagination';

const API_URL = 'https://restcountries.com/v3.1/name/';

function App() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);



  const fetchCountryData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}${countryName}`);
      if (response.data) {
        setCountryData(response.data);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      // Judge if the error is from the backend or from the frontend
      if( error.hasOwnProperty('response')){
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }    
      setCountryData(null);
      setLoading(false);
    }
  };

  // Handle form submit with enter key
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountryData();
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

      {error && <p className="text-danger">{error}</p>}
      {loading && <Loading />}
      {countryData && (
        <div>
          <CountryList
            countryData={countryData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={Object.keys(countryData).length}
            paginate={paginate}
          />
        </div>
      )}
          <div className="items-per-page-dropdown">
            <label>Show items per page: </label>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>


    </div>  
    
    );
}

export default App;
