import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";
import '../styles/NavBar.css'
import homeIcon from '../assets/home.svg'
import shopIcon from '../assets/shop.svg'
import cartIcon from '../assets/cart-shopping.svg'



const NavBar = () => {
    const [cartItems, setCartItems] = useState([]);
    const [modalMessage, setModalMessage] = useState(null)
    const cartItemsNumber = cartItems.length;

    function addToCart ({productID, productName, productImage, productQuantity, productPrice}) {
            if (productQuantity <= 0 || productQuantity > 10 ) return
            if (cartItems.some(item => item.productID === productID)) {
                setModalMessage("Item is already in the cart.");
                return
            }

            console.log(cartItems);
            
            setCartItems(prev => [{productID, productName, productImage, productQuantity, productPrice}, ...prev]);

            setModalMessage("Item added successfully.");
            
        }
        useEffect(() => {
            if (!modalMessage) return;
        
            const timer = setTimeout(() => {
              setModalMessage(null);
            }, 2000);
        
            return () => clearTimeout(timer);
          }, [modalMessage]);

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
                    <Link to="/cart" className="cart">
                        <img src={cartIcon} alt="Cart" />
                        {
                            cartItemsNumber > 0 ? <div className="cartItemsNumber show">{cartItemsNumber}</div> :  <div className="cartItemsNumber">{cartItemsNumber}</div>
                        }
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
        <Outlet context={{ addToCart, cartItems }}/>
        {modalMessage && (
        <div className="modal show">
            <p>{modalMessage}</p>
        </div>
        )}
        </>
    )
}




export default NavBar
