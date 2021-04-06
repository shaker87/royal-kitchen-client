import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductSlider.css'
import { foods } from "../../../FoodData/FoodData";

const ProductSlider = () => {

    const data = foods;
//   const [products, setProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
//   const apiUrl = "https://demo7240682.mockable.io/products";

  //show 1st 4 images

  let firstFourProducts = data.slice(productIndex, productIndex + 5);

  const nextProduct = () => {
    const lastProductIndex = data.length - 1;
    const resetProductIndex = productIndex === lastProductIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    setProductIndex(index);
  };
  const prevProduct = () => {
    const lastProductIndex = data.length - 1;
    const resetProductIndex = productIndex === 0;
    const index = resetProductIndex ? lastProductIndex : productIndex - 1;
    setProductIndex(index);
  };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const result = await axios(`${apiUrl}`);
//       setProducts(result.data);
//     };
//     fetchProducts();
//   }, []);
  return (
    <div className="container">
      <div className="product-slider">
        {firstFourProducts.map(product => (
          <div className="product-images" key={product.id}>
            <img src={product.image} alt={product.image} />
          </div>
        ))}
      </div>
      <div className="button-group">
        <button type="button" className="btn" onClick={prevProduct}>
          Prev
        </button>
        <button type="button" className="btn" onClick={nextProduct}>
          Next
        </button>
      </div>
    </div>
  );
};
export default ProductSlider;