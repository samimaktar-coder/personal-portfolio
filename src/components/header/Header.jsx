import React, { useEffect, useState } from "react";
import "./header.css";
import useScrollPosition from "../../hooks/useScrollPosition";

function Header() {
  const scrollPostion = useScrollPosition();

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    if (scrollPostion <= lastScrollPosition) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollPosition(scrollPostion);
  }, [scrollPostion]);

  return (
    <div>
      <nav
        className={`navbar ${scrollPostion > 200 ? "scroll" : ""} ${
          showNavbar ? "" : "active"
        }`}
      >
        <ul className='nav_list'>
          <li>
            <a
              href='#home'
              className={`nav__link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={`nav__link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => setActiveLink("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#portfolio'
              className={`nav__link ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              onClick={() => setActiveLink("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`nav__link ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
