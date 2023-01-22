import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandomCat from './pages/Cat';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <main>
    <Routes>
      <Route path="/" element={ <Login/> }></Route>
      <Route path="/main" element={ <Main/> }></Route>
      <Route path="/random-cat" element={ <RandomCat/> }></Route>
      {/* <Route path="/users" element={ <Users/> }></Route> */}
      {/* <Route path="/home" element={ <Home/> }></Route>
      <Route path="/error" element={Error} /> */}
    </Routes>
</main>
  );
}
export default App;