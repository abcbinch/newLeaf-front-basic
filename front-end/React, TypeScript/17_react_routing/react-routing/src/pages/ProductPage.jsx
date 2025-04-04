import ProductItem from "./ProductItem";

function ProductPage({ products }) {
  return (
    <main className="ProductPage">
      <div>여기는 상품목록</div>
      {products?.map((product) => {
        // return (
        //   <ul key={product.id}>
        //     <li>상품명: {product.name}</li>
        //     <li>판매자 연락처: {product.email}</li>
        //     <li>상세설명: {product.body.slice(0, 80)}...</li>
        //   </ul>
        // );

        return <ProductItem product={product} key={product.id} />;
      })}
    </main>
  );
}

export default ProductPage;
