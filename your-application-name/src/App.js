import logo from './logo.svg';
// import './App.css';

import Home from './Component/Home';
import Database from './Component/Database';
//import Education from './Component/VaccinationBook';
import News from './Component/News';
import Regulation from './Component/Regulation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {ThemeProvider} from "styled-components"
import VaccinationBook from './Component/VaccinationBook';
import { ChakraProvider} from "@chakra-ui/react";
//import {Global} from "./GlobalStyle"


const App=() =>{
  const theme={
    colors:{
      heading:"#0F7DD1",
      text:"",
      white:"#fff",
      black:"#212529",
      bg:"rgb(249 249 255)",
      footer_bg:"rgb(0, 255, 119)",
      btn:"#623CDB",
      gradient:" linear-gradient(rgb(200,222,231)(90deg, rgba(200,222,231,1) 100%, rgba(69,218,252,0.09401709401709402) 100%));",
      
    },
    media:{mobile:"550px", tab:"900px"},
  }
  return (
  <ThemeProvider theme={theme}>
   
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/database' element={ <Database/>}/>
        <Route path='/vaccination' element={ <VaccinationBook/>}/>
        <Route path='/news' element={ <News/>}/>
        <Route path='/regulation' element={ <Regulation/>}/>
        </Routes>
        <ChakraProvider>
    <Footer/>
    </ChakraProvider>
      </BrowserRouter>
   
      </ThemeProvider>
   
   
   

  );
}

export default App;
