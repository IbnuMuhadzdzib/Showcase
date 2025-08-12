import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import CustomCursor from "./components/customCursor"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <CustomCursor />
    <App />
  </StrictMode>,
)
