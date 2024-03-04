import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Project'
import Header from './components/Header';
import FooterComp from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="about" element={<About/>}  />
      <Route path="/signin" element={<SignIn/>}  />
      <Route path="/signup" element={<SignUp/>}  />
      
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}  />
      </Route>

      <Route path="/projects" element={<Projects/>}  />
     </Routes>
     <FooterComp />
    </BrowserRouter>
  )
}

export default App
