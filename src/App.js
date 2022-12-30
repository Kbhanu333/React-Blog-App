import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Paths from './Routes/Paths';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Paths />
      </BrowserRouter>
    </div>
  );
}

export default App;

