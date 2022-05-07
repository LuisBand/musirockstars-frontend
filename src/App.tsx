import React from 'react';
import "./App.css";
import Menu from './components/menu/menu';
import Header from './components/Header/component';

import styled from '@emotion/styled';
import { Outlet, Link } from "react-router-dom";


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
        <Outlet/>
      </Container>
    </>
  );
};
export default App;
