// Desc: Component to display JSON data in a nested div format

const renderNestedDivs = (data) => {
    return (
      <div>
        {Object.keys(data).map((key, index) => (
          <div key={index}>
            <strong>{key}: </strong>
            {typeof data[key] === 'object' ? (
              renderNestedDivs(data[key])
            ) : (
              <span>{data[key]}</span>
            )}
          </div>
        ))}
      </div>
    );
  };


const JsonDisplay = ({ data }) => {
  return (
    <div>
      <ul>
        <li>
          {renderNestedDivs(data)}
        </li>
      </ul>
    </div>
  );
};

export default JsonDisplay;
