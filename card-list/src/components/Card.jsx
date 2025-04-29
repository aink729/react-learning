import './Card.css'; // css 파일 불러오기

export default function Card({ title, content }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}