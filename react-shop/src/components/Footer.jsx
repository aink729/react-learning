import styles from './Footer.module.css'


export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLinks}>
            <a href="/terms">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
            <a href="/sitemap">사이트맵</a>
          </div>
          <div className={styles.companyInfo}>
                    <p>상호: 리액트상점 | 대표자: 홍길동</p>
                    <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 2025-서울강남-0001호</p>
                    <p>주소: 서울특별시 강남구 테헤란로 123</p>
          </div>
          <button className={styles.scrollTopBtn} onClick={scrollToTop}>
            ↑ 최상단으로 이동
          </button>
        </div>
      </footer>
    );
  }