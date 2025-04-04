import { useNavigate, useParams } from "react-router-dom";

export default function ProductionDetailPage({ products }) {
  const navigate = useNavigate();
  console.log(products);
  const params = useParams();
  console.log("params", params);
  const { productID } = useParams();
  console.log(productID);

  const targetProduct = products.filter((p) => p.id === Number(productID));

  if (!targetProduct) {
    return <main>없는 상품이에요</main>;
  }
  return (
    <main>
      <p>여기는 상품 디테일 페이지!</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
