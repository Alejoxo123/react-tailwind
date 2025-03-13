import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className= "bg-white border border-gray-200  dark:bg-gray-800">
    <App />
    </div>
  </StrictMode>,
)
