import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseLine from "@mui/material/CssBaseLine"
import App from './components/App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseLine/>
    <App />
  </StrictMode>,
)
