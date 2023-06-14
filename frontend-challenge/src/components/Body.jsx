import data from "../data/data.json";
const Body = () => {
  return (
    <div className="body-container">
      <h1 className="body-title">Summary</h1>

      <div className="summary-container">
        {data.map((e, index) => (
          <div key={index} className={`category-container s${index}`}>
            <div>
              <img src={e.icon} alt={e.category} />
              <h1 className={`n${index}`}>{e.category}</h1>
            </div>
            <div>
              <p>{e.score}/100</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
