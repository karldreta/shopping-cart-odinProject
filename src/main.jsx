import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from "./components/NavBar.jsx";
import HomePage from './components/HomePage.jsx';
import Product from './components/Shop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <HomePage/>
    {/* <Product /> */}
  </StrictMode>,
)
