import { useState, useEffect } from "react";

const useProductURL = () => {
    const [productName, setProductName] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
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
      .then((response) => {
        console.log(response.products[0].title)
        console.log(response.products[0].images[0])
        console.log(response.products[0].description)

        setProductName(response.products[0].title)
        setProductImage(response.products[0].images[0])
        setProductDescription(response.products[0].description)
      })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
  }, []);

  return { productName, productImage, productDescription, error, loading };
};

export default useProductURL;