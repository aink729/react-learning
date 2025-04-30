import Card from './Card';
import './CardList.css'; 


const data = [
    { id: 1, title: "첫 번째 상품", content: "이건 첫 번째 상품입니다.", price: "₩29,000", imageUrl: "https://placehold.co/300x200" },
  { id: 2, title: "두 번째 상품", content: "이건 두 번째 상품입니다.", price: "₩49,000", imageUrl: "https://placehold.co/300x200" },
  { id: 3, title: "세 번째 상품", content: "이건 세 번째 상품입니다.", price: "₩19,000", imageUrl: "https://placehold.co/300x200" },
  { id: 4, title: "네 번째 상품", content: "이건 네 번째 상품입니다.", price: "₩59,000", imageUrl: "https://placehold.co/300x200" },
  { id: 5, title: "다섯 번째 상품", content: "이건 다섯 번째 상품입니다.", price: "₩99,000", imageUrl: "https://placehold.co/300x200" },
  { id: 6, title: "여섯 번째 상품", content: "이건 여섯 번째 상품입니다.", price: "₩15,000", imageUrl: "https://placehold.co/300x200" }

];

export default function CardList() {
    return (
        <div className="catd-list">
            {data.map((item) => (
                <Card 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    content={item.content} 
                    imageUrl={item.imageUrl}
                    price={item.price}
                />
            ))}
        </div>
    )
}
