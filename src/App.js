import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Page/Blog/Blog';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Notfound from './Page/Notfound/Notfound';
import Register from './Page/Register/Register';


function App() {
  return (
    <div >
       <Header></Header> 
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registar' element={<Register></Register>}></Route>
       
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
     <Footer></Footer> 
    </div>
  );
}

export default App;
