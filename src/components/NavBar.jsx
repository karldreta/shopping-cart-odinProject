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
            const totalPrice = (productQuantity * productPrice);
            console.log(totalPrice);
            console.log(cartItems);
            
            setCartItems(prev => [{productID, productName, productImage, productQuantity, totalPrice}, ...prev]);

            // handling duplicates
             // map the cartItems and check the ID of each item, if the item already exists, add the totalQuantity
                // also Quantity should not exceed 10 
                
            // cartItems.map(item () => item.productID)
            // if (productID === ) {
                
            // }
          }

    return (
        <>
        <header>
            <h2> <Link to="/">Checkpoint</Link></h2>
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
