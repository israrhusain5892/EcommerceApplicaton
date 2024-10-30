import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { ProductProvider } from './Components/GlobalContextProvider/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
   
  </StrictMode>
)
