import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CssBaseLine from "@mui/material/CssBaseLine"
import App from './components/App/App'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseLine/>
      <App />
    </ThemeProvider>
    
  </StrictMode>,
)
