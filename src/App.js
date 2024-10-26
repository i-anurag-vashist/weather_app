import React, { useState } from "react";
import "./App.css";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <LocationDetails/>
      </div>
    </React.Fragment>
  );
}

export default App;
