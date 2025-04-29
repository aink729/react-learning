import './Card.css'; // css 파일 불러오기

//컴포넌트는 "준비 영역(위쪽)" + "실행 결과 반환(return)"
export default function Card({ title, content, price, imageUrl }) {
    // 👉 여기는 JavaScript 영역 (로직 작성)
  // 여기에 변수, 함수, 조건문 등 자유롭게 작성 가능

    const handleClick = () => { //클릭 이벤트가 발생했을 때 실행될 동작
        alert(`${title}을(를) 구매하시겠습니까?`)
    }
    return (
         // 👉 여기는 JSX 반환 (HTML 구조, 실제로 화면에 표시할 JSX만 작성)
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h2>{title}</h2>
            <p>{content}</p>
            <p className="price">{price}</p>
            <button className="buy-button" onClick={handleClick}>구매하기</button>
        </div>
    )
}