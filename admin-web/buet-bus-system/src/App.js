import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
