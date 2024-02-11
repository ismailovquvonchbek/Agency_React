import React from "react";
import "./Nav.scss";

function Nav({ value = "Salom", Saloom = "nav__link" }) {
  return (
    <a className={`nav__link ${Saloom}`} href="#link">
      {value}
    </a>
  );
}

export default Nav;
