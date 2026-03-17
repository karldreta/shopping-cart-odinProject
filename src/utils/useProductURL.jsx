import { useState, useEffect } from "react";

const useProductURL = () => {
  // const [productName, setProductName] = useState(null);
  // const [productImage, setProductImage] = useState(null);
  // const [productDescription, setProductDescription] = useState(null);
  const [shopProducts, setShopProducts] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194", {
      headers: {
        "User-Agent": "the-odin-project"
      }
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => filterCategory(response.products))
      .then((filteredResponse => {
        console.log(filteredResponse);
        setShopProducts(filteredResponse)
      }
      ))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
  }, []);



  return { shopProducts, error, loading };
};

function filterCategory(products) {
  const  acceptedCategories = [ 
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
  ]
  
  const filteredResponse = products.filter(data => acceptedCategories.includes(data.category));
  
  return filteredResponse;
  
}

export default useProductURL;