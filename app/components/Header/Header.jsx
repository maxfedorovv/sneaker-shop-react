import { ST } from "next/dist/shared/lib/utils";
import Link from "next/link";


export const Header = () => {
    return(
        <header className={Style['header']}>
            <div className={Style['header-container']}>
                <Link href={'/'} className={Style['logo-link']}>
                    <img className={Style['logo-image']} alt="Кроссы и точка" src="/images/logo.svg"/>
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
        </header>
    );
}