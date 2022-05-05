import React from 'react';
import "./App.css";
import Menu from './components/menu/menu';
import Explore from './views/explore/component';

import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;


const App: React.FC = () => {
  return (
    <Container>
      <Menu/>
    </Container>
  );
}
export default App;
