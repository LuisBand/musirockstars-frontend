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
import Player from './components/player/player';


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const MainContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 100px;
`

const ViewContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 260px auto;
  overflow: hidden;
`

const Principal = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 150px auto;
`

const App: React.FC = () => {
  return (
    <MainContainer>
      <ViewContainer>
        <Menu/>
        <Principal>
          <Header/>
          <Routes>
            <Route path="/" element= {<Login/>}>
              <Route path="login" element={<LoginForm/>}/>
              <Route path="signup" element={<RegisterForm/>}/>
            </Route>
            <Route path="/home" element= {<Home/>}/>
        </Routes>
        </Principal>
      </ViewContainer>
      <Player image='https://indierocks.b-cdn.net/wp-content/uploads/2021/03/Limp%C3%A9ratrice_Tako-Tsubo_cover.jpg' artist="L'imperatrice" duration={200} name='Vodoo'/>
    </MainContainer>
  );
};
export default App;
