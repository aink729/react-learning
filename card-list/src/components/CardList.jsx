import Card from './Card';
import './CardList.css'; 


const data = [
    { id: 1, title: "첫 번째 카드", content: "이건 첫 번째 카드입니다."},
    { id: 2, title: "두 번째 카드", content: "두 번째 카드"},
    { id: 3, title: "세 번째 카드", content: "이건 세 번째 카드입니다."},
];

export default function CardList() {
    return (
        <div className="catd-list">
            {data.map((item) => (
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    )
}
