// import { useState } from "react";
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
                    <a href="/">
                        <img src={homeIcon} alt="Home" />
                    </a>
                </li>
                <li>
                    <a href="/shop">
                        <img src={shopIcon} alt="Shop" />
                    </a>
                </li>
                <li>
                    <a href="/cart">
                        <img src={cartIcon} alt="Cart" />
                    </a>
                </li>
            </ul>
            </nav>
        </header>
        </>
    )
}




export default NavBar
