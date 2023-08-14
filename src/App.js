import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
     <AllRoutes/>
      
    </div>
  );
}

export default App;
