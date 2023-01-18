import {Routes, Route} from "react-router-dom"
import React, {useState} from "react"

import TodoApp from './components/TodoApp/TodoApp';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import AppNavigation from './components/AppNavigation';
import lang from "./lang.js"

import budik_biely from "./img/budik_biely.svg"
import budik_cierny from "./img/budik_cierny.svg"
import logo from "./img/logo.png"

function App() {
  const [phrase, setPhrase] = useState(lang.sk.phrase)

  const handleLangChange = (e) => {
    let ver = e.target.value
    setPhrase(lang[ver].phrase)
  }

  return (
    <div>
      <header>
        <div id="header_obal">
          <div className="kontajner">
            <h1><a href="index.html"><img src={budik_biely} alt="budik" /> {phrase["React examples"]} </a></h1>
            <AppNavigation phrase={phrase} /> 
            <select onChange={handleLangChange}>
              <option value="sk">SK</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div className="kontajner" id="pasik"></div>
      </header>

      <Routes>
        <Route path="/" element={<TodoApp phrase={phrase} />} />
        <Route path="weather" element={<WeatherForecast phrase={phrase} />} />
      </Routes>

      

      <footer>
        <div className="kontajner">
          <p><img src={budik_cierny} alt="budik" />{phrase["The application is also available on"]} <a href="">github.com</a></p>
          <div>
            <img src={logo} alt="logo" />
            <p>© gov.sk copyright</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
