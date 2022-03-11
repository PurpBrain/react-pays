import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Connect from './pages/Connect';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/connexion' element={<Connect/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
