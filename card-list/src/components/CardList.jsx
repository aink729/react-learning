import Card from './Card';
import './CardList.css'; 


const data = [
    { id: 1, title: "첫 번째 상품", content: "내용 A", price: "₩29,000", imageUrl: "https://placehold.co/300x200", message: "안녕 나는 첫번째상품이야" },
  { id: 2, title: "두 번째 상품", content: "내용 B", price: "₩49,000", imageUrl: "https://placehold.co/300x200", message: ""},
  { id: 3, title: "세 번째 상품", content: "내용 C", price: "₩19,000", imageUrl: "https://placehold.co/300x200", message: "" },
  { id: 4, title: "네 번째 상품", content: "내용 D", price: "₩59,000", imageUrl: "https://placehold.co/300x200", message: "" },
  { id: 5, title: "다섯 번째 상품", content: "내용 E", price: "₩99,000", imageUrl: "https://placehold.co/300x200", message: "" },
  { id: 6, title: "여섯 번째 상품", content: "내용 F", price: "₩15,000", imageUrl: "https://placehold.co/300x200", message: "" },
  { id: 7, title: "일곱 번째 상품", content: "내용 G", price: "₩13,000", imageUrl: "https://placehold.co/300x200", message: "" }

];

export default function CardList({ openConfirm, openAlert }) {
    return (
        <div className="card-list">
            {data.map((item) => (
                <Card 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    content={item.content} 
                    imageUrl={item.imageUrl}
                    price={item.price}
                    message={item.message}
                    onConfirmClick={openConfirm}
                    onAlertClick={openAlert}
                />
            ))}
        </div>
    )
}
