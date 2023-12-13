import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './style.scss'
import './test.sass'
import axios from 'axios'
import { RouterProvider } from 'react-router'
import { routes } from './routes/routes'
import {motion} from "framer-motion";
import {Reducer} from "redux";
import {} from "@reduxjs/toolkit";
import {ServerStyleSheet} from "styled-components";


function App() {
  
  return(
   <div className='app'>
     <RouterProvider router={routes}/>
   </div>
  )

  
}

export default App
