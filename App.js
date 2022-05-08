
import './App.css';
//import Practice from './pages/practice/index.js';
import Navbar from './components/navbar/index.js';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
     
      <Navbar />

      <Routes>
        {/* <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact /> */}
        <Route path="/" element={<Home />} exact />
       
      </Routes>




    </div>
  );
}

export default App;
