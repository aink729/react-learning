import '../styles/card.css';
import { useNavigate } from "react-router-dom"

export default function Card ({id, title, content, price, imageUrl, soldOut}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!soldOut) {
            navigate(`/detail/${id}`)
        } else {
            alert("❌ 품절된 상품입니다.");
        }
    }

    return(
        <div className="card" aria-labelledby={`card-title-${id}`}>
            <img src={imageUrl} alt={`${title} 상품 썸네일 이미지`} className="card-image" />
            <h2 id={`card-title-${id}`} className="card-title">
                {title}
            </h2>
            <p className="card-content">{content}</p>
            <p className="price" aria-label={`가격은 ${price.toLocaleString()}원입니다`}>
                <strong>{price.toLocaleString()}원</strong>
            </p>
            {/* ✅ 조건에 따라 버튼 문구 변경 & 접근성 라벨 지정 */}
            <button type="button" 
             className={`buy-button ${soldOut ? 'disabled' : ''}`}
             onClick={handleClick}
            disabled={soldOut}
            aria-label={
                soldOut
                  ? `${title} 상품은 품절되었습니다`
                  : `${title} 상품 상세 보기`
              }>
                {soldOut ? '❌ 품절' : '🔍 상세 보기'}
            </button>
        </div>
    )
}