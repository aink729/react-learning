import Card from './Card';
import './CardList.css'; 


const data = [

  { id: 1, title: "🍎 사과", content: "상큼한 맛", price: "$3", soldOut: true, imageUrl: "https://placehold.co/300x200?text=Apple", message: "안녕 나는 사과야" },
  { id: 2, title: "🍌 바나나", content: "달콤한 맛", price: "$2", soldOut: true, imageUrl: "https://placehold.co/300x200?text=Banana" },
  { id: 3, title: "🍇 포도", content: "진한 맛", price: "$4", soldOut: false, imageUrl: "https://placehold.co/300x200?text=Grape" },
  { id: 4, title: "🥝 키위", content: "새콤한 맛", price: "$5", soldOut: false, imageUrl: "https://placehold.co/300x200?text=Kiwi" }

];

export default function CardList({}) {
    return (
        <div className="card-list">
            {data.map((item) => (
                <Card 
                    key={item.id} 
                    id={item.id}
                    title={item.title} 
                    content={item.content} 
                    imageUrl={item.imageUrl}
                    soldOut={item.soldOut}
                    price={item.price}
                    message={item.message}
                />
            ))}
        </div>
    )
}
