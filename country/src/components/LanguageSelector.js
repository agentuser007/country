import React, { useState } from 'react';

// Choose a language from the dropdown menu to see the translation
const LanguageSelector = ({ translations }) => {

  const [selectedLanguage, setSelectedLanguage] = useState('ara');
  if (!translations) {
    return null;
  }
  

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="languageSelect">Choose a Language:</label>
        <select
          className="form-select form-select-sm"
          aria-label="Small select example"
          style={{ width: "250px" }}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {Object.keys(translations).map((langCode) => (
            <option key={langCode} value={langCode}>
              {langCode}
            </option>
          ))}
        </select>
      </div>
      <div className="translation">
        <li><strong>Official</strong>: {translations[selectedLanguage].official}</li>
        <li><strong>Common</strong>: {translations[selectedLanguage].common}</li>
      </div>
    </div>
  );
};

export default LanguageSelector;
