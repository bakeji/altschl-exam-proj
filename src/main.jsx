import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ErrorBoundary} from 'react-error-boundary'
import ErrBoundry from './err-bound.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ErrorBoundary FallbackComponent={ErrBoundry}>
      <App />
    </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
)
