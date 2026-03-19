import { useSearchParams } from 'react-router'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'


const Shop = () => {
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

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  


  function filterProducts(productCategory) {
    if (!productCategory) return shopProducts;
  
    return shopProducts.filter(product =>
      productCategory.includes(product.category)
    );
  }

  // console.log(filterProducts());
  
  
  return (
    <main id='shop'>
      {
      filterProducts(categoryMap[filterBy]).map(product => <Product key={product.id} productName={product.title} productImage={product.images[0]} productDescription={product.description}/>)
      }
    </main>
  )
}



const Product = ({productName, productImage, productDescription}) => {

  return (
    <>
    <div className="productDiv">
      <p className='productName'>{productName}</p>
      <div className='productImageContainer'>
        <img src={productImage} alt={"placeholder text"} />

      </div>
      <p className='productDescription'>{productDescription}</p>
    </div>
    </>
  );
};

export default Shop
