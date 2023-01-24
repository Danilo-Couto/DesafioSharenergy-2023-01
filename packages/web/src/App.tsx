import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandomCat from './pages/Cat';
import Clients from './pages/Clients';
import RandomDog from './pages/Dog';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Login/> }></Route>
        <Route path="/main" element={ <Main/> }></Route>
        <Route path="/random-cat" element={ <RandomCat/> }></Route>
        <Route path="/random-dog" element={ <RandomDog/> }></Route>
        <Route path="/clients" element={ <Clients/> }></Route>
      </Routes>
    </main>
  );
}
export default App;