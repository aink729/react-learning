import Card from "../components/Card"
import products from "../data/products.json"
import styles from "./List.module.css"
import { useLocation } from "react-router-dom";


export default function ListPage() {

    const query = useQuery();
    const category = query.get("category"); 
    // get : 👉 쿼리스트링에서 category 읽기. 원하는 키 값 추출 (category, page 등)


    // 카테고리 필터링 (필터링 없으면 전체 출력)
    const filteredProducts = category
     ? products.filter((item) => item.category === category )
     : products;

    function useQuery(){
      return new URLSearchParams(useLocation().search); 
      // URLSearchParams: 쿼리스트링을 쉽게 다룰 수 있게 도와주는 내장 클래스. query.get("category")처럼 손쉽게 접근할 수 있게 해줘
      // useLocation : 현재 URL 정보 가져오기 (예: /list?category=coffee)
      // .search : ?category=coffee 같은 쿼리스트링 추출
    }

    return (
      <div className={styles['card-list']}>
        <h1>{category ? `"${category}" 카테고리` : "전체 상품 목록"}</h1>
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