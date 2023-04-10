import React from 'react';
import NavBar from './assets/Component/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet/>
    </div>
  );
};

export default App;