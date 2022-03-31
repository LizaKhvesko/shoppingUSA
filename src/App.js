import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { Header } from './Components/Header';
import { Rools } from './Components/Rools';
import { Team } from './Components/Team';
import { Shops } from './Components/Shops';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Rools />
     <Team />
    <Shops />
    <Footer />
    </>
  );
}

export default App;