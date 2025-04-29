import './Card.css'; // css 파일 불러오기

export default function Card({ title, content, price, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h2>{title}</h2>
            <p>{content}</p>
            <p className="price">{price}</p>
            <button className="buy-button">구매하기</button>
        </div>
    )
}