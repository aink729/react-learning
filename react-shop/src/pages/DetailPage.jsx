import { useParams } from "react-router-dom";
import products from "../data/products.json";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const { id } = useParams();  // 경로 파라미터 받아오기
  const product = products.find((item) => item.id === parseInt(id)); 

  if(!product) {
    return (
      <div className={styles['sub-layout']}>
        <div className={styles['sub-inner']}>
          상품을 찾을 수 없습니다.
        </div>
      </div>
    );
  }
  
  return(
    <div className={styles['sub-layout']}>
      <div className={styles['sub-inner']}>
        <div className={styles.info}>
          <img className={styles.img} src={product.imageUrl} alt={`${product.title} 이미지`} />
          <h2>{product.title}</h2>
          <p>{product.content}</p>
          <p className={styles.price}><strong></strong></p>
          {product.soldOut ? (
              <p className={styles.soldOut}>❌ 품절된 상품입니다</p>
            ) : (
              <button className={styles.buyButton}>구매하기</button>
            )
          }
        </div>
        { /* 나중에 product.json에서 Id로 해당 상품 찾아서 보여줘도 돼요! */ }
      </div>
    </div>
  )

}