import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Notfound from './Page/Notfound/Notfound';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
     <Footer></Footer> 
    </div>
  );
}

export default App;
