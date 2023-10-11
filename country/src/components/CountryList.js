import React from 'react';
import CountryItem from './CountryItem';

const CountryList = ({ countryData }) => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Country Information</h1>
      <table className="table table-bordered">
        
        <tbody>
          {Object.entries(countryData).map(([property, value]) => (
            <tr key={property}>
              <td>{parseInt(property)+1}</td>
              <td>
                {value && <CountryItem country={value} />}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
