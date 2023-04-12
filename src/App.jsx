import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import Error from './Component/Error/Error';

const App = () => {
  return (
    <div>
      {/* <NavBar></NavBar>
      <Outlet/>
      <Footer /> */}
      <Error />
    </div>
  );
};

export default App;