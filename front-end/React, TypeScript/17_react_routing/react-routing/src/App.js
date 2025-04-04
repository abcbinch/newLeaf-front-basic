import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Test from "./pages/Test";
import Header from "./components/Header";
import NotFound from "./pages/404";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./style/common.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];
  const [realProduct, setRealProduct] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    console.log(res.data.length);
    setRealProduct(res.data.slice(0, 15));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <Header />
      <a href="/test">test</a>
      {/* 라우팅 처리 */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/test" element={<Test />} />
        {/* <Route
          path="/products"
          element={<ProductPage products={tempProductsData} />}
        /> */}
        <Route
          path="/product"
          element={<ProductPage products={realProduct} />}
        />
        <Route
          path="/product/:productID"
          element={<ProductDetailPage products={realProduct} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
