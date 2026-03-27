import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";
import '../styles/NavBar.css'
import homeIcon from '../assets/home.svg'
import shopIcon from '../assets/shop.svg'
import cartIcon from '../assets/cart-shopping.svg'



const NavBar = () => {
    const [cartItems, setCartItems] = useState([]);
    function addToCart ({productID, productName, productImage, productQuantity, productPrice}) {
            setCartItems(prev => [{productID, productName, productImage, productQuantity, productPrice}, ...prev]);

            // if (productID === ) {
                
            // }
          }

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
                    <Link to="/cart">
                        <img src={cartIcon} alt="Cart" />
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
        <Outlet context={{ addToCart, cartItems }}/>
        </>
    )
}




export default NavBar
