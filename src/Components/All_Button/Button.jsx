import "./Button.scss"
import Icones from "../Image/Buttons_Icon.svg"

function Button({ Class = "salom", value = "Button", image = false }) {
    return (
        <>
            <button className={`button ${Class}`}>
                {image === true ? (
                    <img src={Icones} alt="Icon" width={22} height={22} />
                ) : null}

               {" "} {value}
            </button>
        </>
    )
}

export default Button;