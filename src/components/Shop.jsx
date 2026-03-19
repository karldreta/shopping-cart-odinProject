import { useSearchParams } from 'react-router'
import useProductURL from '../utils/useProductURL'
import '../styles/Shop.css'


const Shop = () => {
  const { shopProducts, error, loading  } = useProductURL();
  const [ searchParams, setSearchParams ] = useSearchParams();

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  

  const filterBy = searchParams.get("category");

  function filterProducts(productCategory) {
    if (!productCategory) return shopProducts;
  
    return shopProducts.filter(product =>
      product.category.includes(productCategory)
    );
  }

  // console.log(filterProducts());
  
  
  return (
    <main id='shop'>
      {
      filterProducts(filterBy).map(product => <Product key={product.id} productName={product.title} productImage={product.images[0]} productDescription={product.description}/>)
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
