import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet/>
    </div>
  );
};

export default App;