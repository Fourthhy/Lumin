import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeConfig } from "flowbite-react";
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeConfig dark={false} />
    {/* <App /> */}
    <AppRoutes />
  </StrictMode>,
)
