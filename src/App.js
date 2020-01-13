import React from "react";
import Header from "./components/Header";
import Test from "./components/Test";
import Carousel from "./components/Carousel";
import Teaser from "./components/Teaser";

function App() {
  constructor(props) {
    super(props);

    this.state = {
      nick: String,
      reason: String,
      date: String
    };
  }

  return (
    <div className="App">
      <Header title="siasas" />
      <Carousel />
      <Test name="dupsko" />
    </div>
  );
}

export default App;
