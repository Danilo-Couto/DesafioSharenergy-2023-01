import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Home from './pages/Main/index copy';

function App() {
  return (
    <main>
    <Routes>
      <Route path="/" element={ <Login/> }></Route>
      <Route path="/main" element={ <Main/> }></Route>
      <Route path="/home" element={ <Home/> }></Route>
      {/*
      <Route path="/randomCat" element={ <RandomCat/> }></Route>
      <Route path="/users" element={ <Users/> }></Route>
      <Route path="/error" element={Error} /> */}
    </Routes>
</main>
  );
}
export default App;