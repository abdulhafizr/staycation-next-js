import {useRouter} from 'next/router'
import styles from '../styles/Home.module.scss'

export default function Header() {
    const router = useRouter()
    return (
        <header className={styles['l-header']}>
            <nav className={`${styles['nav']} container`}>
                <div>
                    <h1 className={styles['nav__brand']}>Stay<span>cation.</span></h1>
                </div>

                <ul className={styles['nav__menu']}>
                    <li className={styles['nav__item']}>
                        <a href="#" className={`${styles['nav__link']} active`}>Home</a>
                    </li>
                    <li className={styles['nav__item']}>
                        <a href="#" className={styles['nav__link']}>Browse by</a>
                    </li>
                    <li className={styles['nav__item']}>
                        <a href="#" className={styles['nav__link']}>Stories</a>
                    </li>
                    <li className={styles['nav__item']}>
                        <a href="#" className={styles['nav__link']}>Agents</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
