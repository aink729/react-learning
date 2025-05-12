import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header (){
    return (
        <header className={styles.header}>
            <div className={styles['header-inner']}>
                <button className={styles[btn-back]} onClick={() => navigate(-1)}>
                    ← 이전으로
                </button>
                <h2 className={styles.pageTitle}>상세 페이지</h2>
                <div className={styles['auth-buttons']}>
                    <button className={styles.login}>로그인</button>
                    <button className={styles.join}>회원가입</button>
                </div>
            </div>
        </header>
    );
}