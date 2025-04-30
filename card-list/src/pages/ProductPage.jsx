import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams(); // useParams() : Route 안에서 보여지는 컴포넌트 안에서만 사용 (App.jsx 사용 X)

  return (
    <div>
      <h2>상품 상세 페이지</h2>
      <p>상품 ID: {id}</p>
    </div>
  );
}