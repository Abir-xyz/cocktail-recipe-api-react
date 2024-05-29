import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Details from './pages/Details';

const App = () => {
  return (
    <BrowserRouter>
      <main className='main'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
