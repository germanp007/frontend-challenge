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
              <p style={{ color: "hsl(224, 30%, 27%)", fontWeight: "600" }}>
                {e.score}/
                <span
                  style={{ color: "hsl(241, 100%, 89%)", fontWeight: "600" }}
                >
                  100
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Body;
