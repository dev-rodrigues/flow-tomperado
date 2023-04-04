import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import ReactDOM from 'react-dom/client'
import App from './App'

import "./global.css"
import {theme} from "./styles/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider resetCSS theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
