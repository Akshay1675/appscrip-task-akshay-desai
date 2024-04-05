import { useEffect, useState } from "react";
import { PRODUCTS_DATA_URL } from "../constants/constants";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ filterOptions }) => {
  const [productList, setProductList] = useState();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(PRODUCTS_DATA_URL);
    const json = await data.json();
    setProductList(json);
  };
  return (
    <div
      className={`${
        filterOptions ? "md:w-[932px] w-[344px]" : "md:w-[1248px] w-[344px]"
      } ${filterOptions && "md:ml-6"} flex flex-wrap -ml-12 md:-ml-0`}
    >
      {productList?.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
