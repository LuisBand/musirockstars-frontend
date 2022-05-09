import React from 'react';
import "./App.css";
import Menu from './components/menu/menu';
import Header from './components/Header/component';
import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";

import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";

import Home from './views/home/component';
import Login from "./views/Login/component";
import LoginForm from "./components/forms/login/component";
import RegisterForm from "./components/forms/register/component";
import { Box } from '@mui/material';


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;


const App: React.FC = () => {
  return (
    <>
      <Menu/>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element= {<Login/>}>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="signup" element={<RegisterForm/>}/>
          </Route>
          <Route path="/home" element= {<Home/>}/>
        </Routes>
      </Container>
    </>
  );
};
export default App;
