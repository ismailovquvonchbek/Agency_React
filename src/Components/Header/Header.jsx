import "./Header.scss"
import Logo from "../Image/Logo.svg"
import Nav from "../Nav/Nav"
import Button from "../All_Button/Button"



export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="header__link" href="#link">
                        <img className="header__logo" src={Logo} alt="Logo" />
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Nav value="Features " />
                            </li>

                            <li className="nav__item">
                                <Nav value="Pricing & Plans " />
                            </li>

                            <li className="nav__item">
                                <Nav value="Support " />
                            </li>

                            <li className="nav__item">
                                <Nav value="About " />
                            </li>
                        </ul>
                    </nav>

                    <Button value="Contact Us" />
                </div>
            </header>
        </>
    )
}