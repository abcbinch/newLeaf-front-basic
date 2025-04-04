import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={"/product/" + product.id} className="ProductItem">
      <ul>
        <li>상품명: {product.name}</li>
        <li>판매자 이메일: {product.email}</li>
        <li>상세설명: {product.body.slice(0, 90)}...</li>
      </ul>
    </Link>
  );
}
export default ProductItem;
