import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import GeneralForm from './GeneralForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GeneralForm />
  </StrictMode>,
)
