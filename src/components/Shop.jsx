import { useState } from 'react'
import { Link, useSearchParams, useOutletContext } from 'react-router'
import useProductURL from '../utils/useProductURL'
import { categoryMap } from './ShopCategories'
import { linkIcons } from './HomePageIcons'
import Product from './Product'
import '../styles/Shop.css'

const Shop = () => {
  const { addToCart } = useOutletContext()
  const { shopProducts, error, loading  } = useProductURL();
  const [ searchParams ] = useSearchParams();
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
      {linkIcons.map(link => <Link key={link.name} to={link.to}>{link.name}</Link>)}
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




export default Shop
