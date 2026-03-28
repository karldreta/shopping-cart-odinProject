import { useState } from 'react'
import { Link, useSearchParams, useOutletContext } from 'react-router'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'

const Shop = () => {
  const { addToCart } = useOutletContext()
  const { shopProducts, error, loading  } = useProductURL();
  const [ searchParams ] = useSearchParams();
  const categoryMap = {
    everything: [
      "beauty",
      "fragrances",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "skin-care",
      "sunglasses",
      "tops",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches"
    ],
  
    mens: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches"
    ],
  
    womens: [
      "womens-dresses",
      "womens-shoes",
      "tops"
    ],
  
    shoes: [
      "mens-shoes",
      "womens-shoes"
    ],
  
    bags: [
      "womens-bags"
    ],
  
    glasses: [
      "sunglasses"
    ],
  
    watches: [
      "mens-watches",
      "womens-watches"
    ],
  
    fragrances: [
      "fragrances"
    ]
  };
  const filterBy = searchParams.get("category");
  const [sortOption, setSortOption] = useState(null)
  const filtered = filterProducts(categoryMap[filterBy]);
  const sorted = sortProducts(filtered, sortOption);



  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  

  function filterProducts(productCategory) {
    if (!productCategory) return shopProducts;
  
    return shopProducts.filter(product =>
      productCategory.includes(product.category)
    );
  }  

  function sortProducts(products, sortOption) {
    if (!sortOption) return products;
  
    const sorted = [...products]; 
  
    if (sortOption === "low-high") {
      return sorted.sort((a, b) => a.price - b.price);
    }
  
    if (sortOption === "high-low") {
      return sorted.sort((a, b) => b.price - a.price);
    }
  
    return products;
  }
  
  return (
    <>
    <nav className='linkFilter'>
      <ul>
      <li><Link to="/product?category=mens">Men's</Link></li>
      <li><Link to="/product?category=womens">Women's</Link></li>
      <li><Link to="/product?category=shoes">Shoes</Link></li>
      <li><Link to="/product?category=bags">Bags</Link></li>
      <li><Link to="/product?category=glasses">Glasses</Link></li>
      <li><Link to="/product?category=watches">Watches</Link></li>
      <li><Link to="/product?category=fragrances">Fragrances</Link></li>
      <li><Link to="/product?category=everything">Everything</Link></li>
      </ul>
    </nav>
    <div className="priceSort container">
      <p>Sort Price:</p>
     <div>
      <button onClick={() => setSortOption("low-high")}>Low - High</button>
      <button onClick={() => setSortOption("high-low")}>High - Low</button>
     </div>
    </div>
    <main id='shop'>
      {
      sorted.map(product => <Product key={product.id} 
        productID={product.id} 
        productName={product.title} 
        productImage={product.images[0]} 
        productDescription={product.description} 
        productPrice={product.price}
        productQuantity={1}
        addToCart={addToCart}/>)
      }
    </main>
    </>
  )
}



const Product = ({productID, productName, productImage, productPrice, addToCart}) => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <>
    <div className="productDiv">
      <p className='productName'>{productName}</p>
      <div className='productImageContainer'>
        <img src={productImage} alt={"placeholder text"} />
      </div>
      <p className='productPrice'>{"$" + productPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}</p>
      <div className="selectQuantityContainer">
      <input  type="text" 
              pattern="[0-9]*" 
              inputMode="numeric" 
              value={productQuantity} 
              onChange={e => setProductQuantity(e.target.value)} />
        <button className="increase" onClick={() => productQuantity < 10 ? setProductQuantity(productQuantity + 1) : productQuantity}>+</button>
        <button className="decrease" onClick={() => productQuantity > 0 ? setProductQuantity(productQuantity - 1) : productQuantity}>-</button>
      </div>
      <button onClick={() => addToCart({productID, productName, productImage, productQuantity, productPrice})}>Add to Cart</button>
    </div>
    </>
  );
};




export default Shop
