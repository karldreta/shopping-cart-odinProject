import { useOutletContext } from "react-router"
import '../styles/Cart.css'




const Cart = () => {
    const { cartItems } = useOutletContext();
    console.log(cartItems);
    
    
    return (
        <>
            <h4>ShoppingCart</h4>
            <main id="shoppingCart">
                {
                   cartItems.map(item => <CartItem 
                    key={item.productID} 
                    productID={item.productID} 
                    productImage={item.productImage} 
                    productName={item.productName} 
                    productPrice={item.productPrice}
                    productQuantity={item.productQuantity}
                    />
                    
                
                ) 
                }
            </main>
        </>
    )

}


const CartItem = ({productImage, productName, productQuantity, productPrice}) => {    
    return (
    <div className="cartItemContainer">
        <div className="imageContainer">
            <img src={productImage}/>
        </div>
        <p>{productName}</p>
        <p>{productQuantity}</p>
        <p>{productPrice}</p>
    </div>
    )
}


export default Cart