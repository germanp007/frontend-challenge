const Header = () => {
  return (
    <div className="header-background">
      <h3 className="header-title">Your Result</h3>
      <div className="header-circle">
        {" "}
        <span>76</span> <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Header;
