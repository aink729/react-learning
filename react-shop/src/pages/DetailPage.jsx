import { useParams } from "react-router-dom";
import products from "../data/products.json";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const { id } = useParams();  // 경로 파라미터 받아오기
  const product = products.find((item) => item.id === parseInt(id)); // item.id 숫자(Number), parseInt(id) 숫자로 변환
  const recommended = products.filter((item) => item.id !== Number(id)).slice(0,4);
  // 현재 상품과 같은 카테고리이지만, 현재 상품은 제외
  const recommendedCate = products.filter((item) => item.category === product.category && item.id !== product.id)

  // id가 없는 페이지를 열 경우
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

        <div className={styles.recommend}>
          <h3>추천 상품</h3>
          <ul className={styles.recommendList}>
            {recommended.map((item) => (
              <li key={item.id} className={styles.recommendItem}>
                <img src={item.imageUrl} alt={`${item.title} 이미지`} />
                <p>{item.title}</p>
                <p>{item.price.toLocaleString()}원</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.recommend}>
          <h3>같은 카테고리 내 추천 상품</h3>
          <ul className={styles.recommendList}>
            {recommendedCate.map((item) => (
              <li key={item.id} className={styles.recommendItem}>
                <img src={item.imageUrl} alt={`${item.title} 이미지`} />
                <p>{item.title}</p>
                <p>{item.price.toLocaleString()}원</p>
              </li>
            ))}
          </ul>
        </div>
        { /* 나중에 product.json에서 Id로 해당 상품 찾아서 보여줘도 돼요! */ }
      </div>
    </div>
  )

}