import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import GeneralForm from './components/GeneralForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import WorkForm from './components/WorkForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <GeneralForm />
    <EducationForm />
    <WorkForm />
  </StrictMode>,
)
