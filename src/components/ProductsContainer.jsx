import { useEffect, useState } from "react";
import { PRODUCTS_DATA_URL } from "../constants/constants";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const ProductsContainer = ({ filterOptions }) => {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true)
    const data = await fetch(PRODUCTS_DATA_URL);
    const json = await data.json();
    setProductList(json);
    setLoading(false)
  };
  return loading ? <Shimmer /> : (
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
