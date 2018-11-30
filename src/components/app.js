import React, { Component } from "react";

import Header from "./header";
import Main from "./main";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <Main />
      </div>
    </React.Fragment>
  );
};

export default App;
