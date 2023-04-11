import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet/>
      <Footer />
    </div>
  );
};

export default App;