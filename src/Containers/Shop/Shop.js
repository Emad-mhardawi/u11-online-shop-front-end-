import ProductCard from "../../Components/UI/productCard/productCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productsActions";
import "./Shop.css";
import { useEffect } from "react";
import Loader from "../../Components/UI/Loader/Loader";

const Shop = (props) => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  const { loading, error, products } = productsData;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(productsData);
  return (
    <div className="Shop">
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="shop-products-list">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
