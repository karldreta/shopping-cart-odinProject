import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import NavBar from "./components/NavBar.jsx";
import HomePage from './components/HomePage.jsx';
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {path: '/', element: <HomePage/>},
      {path: 'product', element: <Shop />},
      {path: 'cart', element: <Cart />},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
