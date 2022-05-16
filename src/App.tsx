import React from 'react';
import "./App.css";
import Menu from './components/menu/menu';
import Header from './components/Header/component';
import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";

import { render } from "react-dom";
import { Routes, Route, Navigate} from "react-router-dom";

import Home from './views/home/component';
import Login from "./views/Login/component";
import LoginForm from "./components/forms/login/component";
import RegisterForm from "./components/forms/register/component";
import { Box } from '@mui/material';
import Player from './components/player/player';
import AlbumDetails from './views/albumDetails/component';
import Directions from './views/directions/component';
import AddressForm from './components/forms/address/component';
import ArtistDetails from './views/artistDetails/component';
import Albums from './views/albums/component';
import Artists from './views/artists/component';


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
            <Route
              path="/"
              element={<Navigate to="/login" replace/>}
            />
            <Route path="/" element= {<Login/>}>
              <Route path="login" element={<LoginForm/>}/>
              <Route path="signup" element={<RegisterForm/>}/>
            </Route>
            <Route path="/home" element= {<Home/>}/>
            <Route path="/albumDetails" element={<AlbumDetails/>}/>
            <Route path="/artistDetails" element={<ArtistDetails/>}/>
            <Route path="/directions" element={<Directions/>}/>
            <Route path="/addDirection" element={<AddressForm/>}/>
            <Route path="/albums" element={<Albums/>}/>
            <Route path="/artists" element={<Artists/>}/>
        </Routes>
        </Principal>
      </ViewContainer>
      <Player image='https://indierocks.b-cdn.net/wp-content/uploads/2021/03/Limp%C3%A9ratrice_Tako-Tsubo_cover.jpg' artist="L'imperatrice" duration={232} name='Vodoo'/>
    </MainContainer>
  );
};
export default App;
