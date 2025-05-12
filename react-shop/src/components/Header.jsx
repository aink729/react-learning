import { Link } from "react-router-dom"
import styles from './Header.module.css'

export default function Header (){
    return (
        <header className={styles.header}>
            <div className={styles['header-inner']}>
                <a href="/" className={styles.logo} aria-label="홈으로 이동">
                    <h1>
                        <img src="/logo.svg" alt="ReactMall 로고" />
                    </h1>
                </a>
                <nav className={styles['main-nav']}>
                    <ul>
                        <li>
                            <Link to="/list" className={styles.link}>상품</Link>
                        </li>
                        <li>이벤트</li>
                        <li>고객센터</li>
                    </ul>
                </nav>
                <div className={styles['auth-buttons']}>
                    <button className={styles.login}>로그인</button>
                    <button className={styles.join}>회원가입</button>
                </div>
            </div>
        </header>
    );
}