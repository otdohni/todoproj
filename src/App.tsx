import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route Component={TodosPage} path='/'></Route>
        <Route Component={AboutPage} path='/about'></Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
