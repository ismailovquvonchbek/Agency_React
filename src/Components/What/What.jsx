import Button from "../All_Button/Button";
import Icon1 from "../Image/What_Icon1.svg"
import Rocket from "../Image/rocket.svg"
import "./What.scss"


function What() {
    return (
        <>
            <section className="what">
                <div className="container">

                    <div className="what__info">
                        <h2 className="what__title">What we do</h2>
                        <h2 className="what__heading">we are Here To Help You Build Your Business <img src={Rocket} alt="Icon" /></h2>
                        <p className="what__text">
                            Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.
                        </p>
                        <Button value="Explore all service" />
                    </div>

                    <ul className="what__list">
                        <li className="what__item">
                            <img className="what__img" src={Icon1} alt="Img" />
                            <h3 className="what__h3">Digital Marketing</h3>
                            <p className="what__p"> That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="what__link" href="#link">Read more</a>
                        </li>

                        <li className="what__item">
                            <img className="what__img" src={Icon1} alt="Img" />
                            <h3 className="what__h3">SEO</h3>
                            <p className="what__p"> That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="what__link" href="#link">Read more</a>
                        </li>

                        <li className="what__item">
                            <img className="what__img" src={Icon1} alt="Img" />
                            <h3 className="what__h3">UI UX Design</h3>
                            <p className="what__p"> That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="what__link" href="#link">Read more</a>
                        </li>

                        <li className="what__item">
                            <img className="what__img" src={Icon1} alt="Img" />
                            <h3 className="what__h3">Web Development</h3>
                            <p className="what__p"> That is the simply dummy text the printing and typesetting industry. </p>
                            <a className="what__link" href="#link">Read more</a>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    )
}

export default What;