import { header, link, logo } from './Header.css'

export const Header = () => {
    return (
        <nav className={header} >
            <img className={logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1024px-Y_Combinator_logo.svg.png" alt="logo" />
            <a className={link} href="/">
                Hacker News
            </a>
        </nav>
    )
}