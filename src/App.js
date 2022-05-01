import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Page/Categories/Categories';
import Home from './Page/Home/Home';
import Inventory from './Page/Inventory/Inventory';

function App() {
  return (
    <div >
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
    
   </Routes>
    </div>
  );
}

export default App;
