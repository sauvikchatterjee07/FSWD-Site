import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
      </Routes>
    </Router>
  )
}

export default App
