import Card from "../components/Card"
import products from "../data/products.json"
import styles from "./List.module.css"

export default function ListPage() {
    return (
      <div className={styles['card-list']}>
        <h1></h1>
        <div className={styles['card-grid']}>
          {products.map((item) => (
            <Card 
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              price={item.price}
              imageUrl={item.imageUrl}
              soldOut={item.soldOut}
            />
          ))}
        </div>
      </div>
    )
  }