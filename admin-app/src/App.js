import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/home';
import Signin from './containers/Signin/signin';
import Signup from './containers/Signup/signup';


function App() {
  return (
    // <div className="App">

    //code shown in the video is depricatred
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
