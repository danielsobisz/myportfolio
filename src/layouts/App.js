import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/style.scss";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
