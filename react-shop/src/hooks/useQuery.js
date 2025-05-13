import { useLocation } from "react-router-dom";

export default function useQuery(){
      return new URLSearchParams(useLocation().search); 
      // URLSearchParams: 쿼리스트링을 쉽게 다룰 수 있게 도와주는 내장 클래스. query.get("category")처럼 손쉽게 접근할 수 있게 해줘
      // useLocation : 현재 URL 정보 가져오기 (예: /list?category=coffee)
      // .search : ?category=coffee 같은 쿼리스트링 추출
}