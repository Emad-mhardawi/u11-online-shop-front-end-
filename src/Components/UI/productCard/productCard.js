import "./productCard.css";
import Rating from "../Rating/Rating";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="productCard__image-box">
        <img
        alt='product '
          className="productCard__image"
          src={props.product.image ? props.product.image : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'}
        />
      </div>
      
      <div className="productCard__details">
        <h3 className="productCard__title"> {props.product.title} </h3>
        <p className="productCard__brand">{props.product.brand}</p>
         <Rating Rating={props.product.Rating}/>
      
      </div>
      <div className='productCard__payments'>
          <h3 className="productCard__price">{props.product.price} $</h3>
          <button className="productCard__addToCart">Add To Cart</button>
        </div>
    </div>
  );
};

export default ProductCard;
