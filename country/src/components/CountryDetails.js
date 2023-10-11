import { JsonView, allExpanded,  defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const CountryDetails = (countryData) => {
    
    
    return(
        <div className="overflow-y-auto" style={{ height: "250px" }}>
      <JsonView data={countryData} 
      shouldExpandNode={allExpanded}
      style={defaultStyles} />
    
       </div>
    )
}

export default CountryDetails;