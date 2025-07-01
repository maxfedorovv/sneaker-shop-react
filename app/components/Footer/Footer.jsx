import Link from "next/link"


export const Footer = () => {
    return (
        <footer className={Style['footer']}>
            <div className={Style['footer-container']}>
                <Link href={'/'} className={Style['footer-logo-link']}>
                    <img className={Style['footer-logo-image']} alt="Кроссы и точка" src="/images/logo_footer.svg"/>
                </Link>
                <nav className={Style['nav']}>
                    <ul className={style['nav-list']}>
                        <li className={Style['item-list']}>
                            <a href="/" className={Style['nav-link']}>
                            💬 TG
                            </a>
                        </li>
                        <li className={Style['item-list']}>
                            <a href="/" className={Style['nav-link']}>
                            😊 VK
                            </a>
                        </li>
                        <li className={Style['item-list']}>
                            <a href="/" className={Style['nav-link']}>
                            💬 YouTube
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={Style['copyright']}>
                <p className={Style['copyright-text']}>КРОССЫ И ТОЧКА® 2023</p>
            </div>
        </footer>
    )
}