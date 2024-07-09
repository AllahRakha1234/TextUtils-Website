import './App.css';
import { useState } from 'react';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import ColorPicker from './component/ColorPicker';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {

  // ********* STATES **********
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // FOR COLOR PALLETE LOGIC
  const getSelectedColorFromNavbar = (color) => {
    if (color !== null) {
      document.body.style.backgroundColor = color;
      showAlert("Theme has been changed", "success");
    }
  };

  // FOR ALERT LOGIC
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // FOR MODE LOGIC
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // CHANGING TITLE LOGIC
      // document.title = "TextUtils - Light Mode";
      // CHANGING TITLE CONSISTANTLY
      // setInterval(() => {
      //   document.title = "TextUtils - Free";
      // }, 2000)
      // setInterval(() => {
      //   document.title = "TextUtils - Install Now";
      // }, 1500)
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "#0c065a";
      showAlert("Dark mode has been enabled", "success");
      // CHANGING TITLE LOGIC
      // document.title = "TextUtils - Dark Mode";
    }
  }


  // ********* RENDER **********

  return (
    <>
      <Router>

        {/* <Navbar/> */}
        {/* <Navbar title={3}/> */}
        <Navbar title={"TextUtils"} mode={mode} getColorFromNbFun={getSelectedColorFromNavbar} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} alert={alert} />}
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
