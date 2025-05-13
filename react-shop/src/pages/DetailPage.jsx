import { useParams, Link } from "react-router-dom";
import { getRandomItems } from "../utils/getRandomItems";
import products from "../data/products.json";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const { id } = useParams();  // 경로 파라미터 받아오기. 항상 문자열로 반환함. "숫자"
  const productId = Number(id); // 또는 parseInt(id)
  const product = products.find((item) => item.id === productId); // item.id 숫자(Number), parseInt(id) 숫자로 변환

  const currentIndex = products.findIndex((item) => item.id === productId);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];
  // const recommended = products.filter((item) => item.id !== Number(id)).slice(0,4);
  // 랜덤으로 4개 추출
  // const recommended = products
  // .filter((item) => item.id !== Number(id)) // 현재 상품은 제외
  // .sort(() => Math.random() - 0.5 ) // 🔀 배열 섞기 (무작위 정렬)
  // .slice(0,4) // ✂️ 앞에서 4개만 추출

  // 추천 상품 (현재 상품 제외 후 랜덤 4개)
  const recommended = getRandomItems(
    products.filter((item) => item.id !== productId),
    4
  )

  // 현재 상품과 같은 카테고리이지만, 현재 상품은 제외, 랜덤으로 4개 추출
  // const recommendedCate = products
  // .filter((item) => item.category === product.category && item.id !== product.id)
  // .sort(() => Math.random() - 0.5 ) // 🔀 배열 섞기 (무작위 정렬)
  // .slice(0,4) // ✂️ 앞에서 4개만 추출


  // 추천 상품 (현재 상품과 같은 카테고리이지만 현재 상품 제외 후 랜덤 4개)
  const recommendedCate = getRandomItems(
    products.filter((item) => item.category === product.category  && item.id !== productId),
    4
  )

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

        <div className={styles.breadcrumb}>
          <span>
            <Link to="/">홈</Link> &gt;&nbsp;
            <Link to={`/list?category=${product.category}`}>{product.category}</Link> &gt;&nbsp;
            <span>{product.title}</span>
          </span>
        </div>

        <div className={styles.navBox}>
          { prevProduct ? (
              <Link to={`/detail/${prevProduct.id}`} className={styles.navButton}>
                ← {prevProduct.title}
              </Link>
          ) : <div></div>}
          { nextProduct ? (
              <Link to={`/detail/${nextProduct.id}`} className={styles.navButton}>
                {nextProduct.title} →
              </Link>
          ) : <div></div>}
        </div>

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
          <h3>이 상품과 함께 보면 좋은 추천 상품</h3>
          <ul className={styles.recommendList}>
            {recommended.map((item) => (
                <li key={item.id} className={styles.recommendItem}>
                  <Link
                    key={item.id}
                    to={`/detail/${item.id}`}
                    className={styles.recommendLink}
                  >
                    <img src={item.imageUrl} alt={`${item.title} 이미지`} />
                    <p>{item.title}</p>
                    <p>{item.price.toLocaleString()}원</p>
                  </Link>
                </li>
            ))}
          </ul>
        </div>

        <div className={styles.recommend}>
          <h3>같은 카테고리 내 추천 상품</h3>
          <ul className={styles.recommendList}>
            {recommendedCate.map((item) => (
              <li key={item.id} className={styles.recommendItem}>
                <Link
                  key={item.id}
                  to={`/detail/${item.id}`}
                  className={styles.recommendLink}
                >
                  <img src={item.imageUrl} alt={`${item.title} 이미지`} />
                  <p>{item.title}</p>
                  <p>{item.price.toLocaleString()}원</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        { /* 나중에 product.json에서 Id로 해당 상품 찾아서 보여줘도 돼요! */ }
      </div>
    </div>
  )

}