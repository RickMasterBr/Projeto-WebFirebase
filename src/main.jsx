import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './components/header/Header.jsx'
import { Sobre } from './components/sobre/Sobre.jsx'
import { Contato } from './components/contato/Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contato"/>
  </StrictMode>
)
