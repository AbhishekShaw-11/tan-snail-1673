import React from 'react';
import Navbar from './compoment/Navbar';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {
      <Navbar/>
  }
    </ChakraProvider>
  );
}

export default App;
