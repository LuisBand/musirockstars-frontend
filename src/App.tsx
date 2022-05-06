import React from 'react';
import { Routes, Route } from "react-router-dom";
import { SxProps } from "@mui/material";
import "./App.css";
import Menu from './components/menu/menu';
import Home from './views/home/component';
import Header from './components/Header/component';
import { Box } from "@mui/system";

import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <>
      <Menu/>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Container>
    </>
  );
};
export default App;
