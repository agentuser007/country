import React from 'react';
import CountryItem from './CountryItem';

const CountryList = ({ countryData, currentPage, itemsPerPage  }) => {

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  let currentCountries = Object.values(countryData).slice(indexOfFirstCountry, indexOfLastCountry);
  

  if(Object.keys(countryData).length < indexOfLastCountry){
    currentCountries = Object.values(countryData).slice(indexOfFirstCountry, Object.keys(countryData).length);
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Country Information</h3>
      <table className="table table-bordered">
        
        <tbody>

          {currentCountries.map((country, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td> <CountryItem country={country} /></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
