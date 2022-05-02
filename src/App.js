import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
