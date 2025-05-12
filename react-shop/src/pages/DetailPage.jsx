import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css"

export default function DetailPage() {
  const { id } = useParams(); 
  
  return(
    <div className={styles['sub-layout']}>
      <div className={styles['sub-inner']}>
        <h1>{id}번 상품 상세 페이지</h1>
        { /* 나중에 product.json에서 Id로 해당 상품 찾아서 보여줘도 돼요! */ }
      </div>
    </div>
  )

}