// import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";
import '../styles/NavBar.css'
import homeIcon from '../assets/home.svg'
import shopIcon from '../assets/shop.svg'
import cartIcon from '../assets/cart-shopping.svg'



const NavBar = () => {
    return (
        <>
        <header>
            <h2>Checkpoint</h2>
            <nav>
            <ul>
                <li>
                   <Link to="/">
                        <img src={homeIcon} alt="Home" />
                   </Link>
                </li>
                <li>
                    <Link to="product">
                    <img src={shopIcon} alt="Shop" />
                    </Link>

                </li>
                <li>
                    <a href="/cart">
                        <img src={cartIcon} alt="Cart" />
                    </a>
                </li>
            </ul>
            </nav>
        </header>
        <Outlet />
        </>
    )
}




export default NavBar
