import './App.css';
import CheckBoxdemo from './components/CheckBoxdemo';
import { MuiButtons } from './components/MuiButtons';
import { MuiTypography } from './components/MuiTypography';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(20, 0, 79)';
      showAlert("Dark Mode Has been enabled!!!", "success");
      document.title = 'Text-Editor Dark Mode';
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has been enabled!!!", "warning");
      document.title = 'Text-Editor Light Mode';
    }
  }
  return (
    // <div className="App">
    //   <MuiTypography />
    //   <MuiButtons/>
    //   <CheckBoxdemo/>
    // </div>
    <>
    <Router>
      <NavBar title="Kapil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">     
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/home" element= {<TextForm heading="Enter Your Text" showAlert={showAlert} mode={mode}/>} />
          </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;
