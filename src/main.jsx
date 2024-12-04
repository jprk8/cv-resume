import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import GeneralForm from './components/GeneralForm.jsx'
import EducationForm from './components/EducationForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GeneralForm />
    <EducationForm />
  </StrictMode>,
)
