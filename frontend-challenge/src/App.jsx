import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <main>
      <section>
        <Header />
        <Body />
      </section>
      <div>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://portfolio-frontdev.netlify.app" target="_blank">
          German Pinto
        </a>
        .
      </div>
    </main>
  );
};

export default App;
