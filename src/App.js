import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import FavList from './components/FavList/FavList ';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/favorite" element={<FavList/>} />
        <Route path="/home" element={<Home />} /> 
     </Routes>
    </div>
  );
}
export default App;