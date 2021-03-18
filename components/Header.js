import {useRouter} from 'next/router'

export default function Header() {
    const router = useRouter()
    return (
        <header className="l-header">
            <nav className="container nav">
                <div>
                    <h1 className="nav__brand">Stay<span>cation.</span></h1>
                </div>

                <ul className="nav__menu">
                    <li className="nav__item">
                        <a href="#" className="nav__link active">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Browse by</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Stories</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Agents</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
