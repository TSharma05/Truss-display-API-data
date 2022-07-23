import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // this will import the Home component from the pages folder

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* the below route will render the Home component */}
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
