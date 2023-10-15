import React, { useState } from 'react';
import CountryDetails from './CountryDetails';
import JsonDisplay from '../utils/JsonDisplay';
import LanguageSelector from './LanguageSelector';


const CountryItem = ({ country }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

const { capital, population, currencies, languages, flag } = country;


  return (
    <div className="country-item">
      <button
        className="btn btn-outline-dark btn-lg"
        onClick={toggleCollapse}
      >
        {country.name.common + ' ' + flag}
      </button>
      {isOpen && (
        <div className="country-details">
            {/* <div className="card-body"> */}
            <div className="overflow-auto">
            <p className="card-text">
            <strong>Capital:</strong> {capital}
            </p>
            <p className="card-text">
            <strong>Population:</strong> {population}
            </p>
            <p className="card-text">
            <strong>Currencies:</strong> </p>
            <JsonDisplay data={currencies} />
            
            <p className="card-text">
            <strong>Languages:</strong> </p>
            <JsonDisplay data={languages} />

            <LanguageSelector translations={country.translations} />
            
           
            <p>More details:</p>
            <CountryDetails data={country} />

            

        </div>


        </div>
      )}
    </div>
  );
};

export default CountryItem;
