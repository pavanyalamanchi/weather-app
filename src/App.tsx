import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
// import CityWeather from './components/CityWeather'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path='/' component={Weather} />
          {/* <Route exact path='/weather' component={CityWeather}/> */}
        </Router>
      </header>
    </div>
  );
}

export default App;
