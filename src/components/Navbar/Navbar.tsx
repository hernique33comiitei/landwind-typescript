import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

import Container from "../Container/Container";

import logo from "../../assets/icons/logo.svg";
import ButtonBlue from "../ButtonBlue/ButtonBlue";
import StarGithub from "../StarGithub/StarGithub";

import "./styles/navbar.css";
import "./styles/mqNavbar.css";

export default function Navbar() {
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth);

  const optionsText = [
    "home",
    "company",
    "marketplace",
    "features",
    "team",
    "contact",
  ];

  function reziseEvent() {
    setBodyWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", reziseEvent);

    return () => window.removeEventListener("resize", reziseEvent);
  }, []);

  return (
    <Container classPersonalization="containerPersonalizeNavbar">
      <div className="navbar_containerLogo">
        <img className="navbar_logo" src={logo} alt="Logo" />
        <p className="navbar_textMain">Landwind</p>
      </div>

      {bodyWidth <= 1024 ? (
        <>
          <label htmlFor="checkboxMenuMobile" className="labelMenuMobile">
            <FiMenu />
          </label>
          <input
            type="checkbox"
            name="checkboxMenuMobile"
            id="checkboxMenuMobile"
          />
          <div className="navbar_contaierOptionsMobile">
            {optionsText.map((option, index) => (
              <a className="navbar_options" key={option + index} href="#">
                {option}
              </a>
            ))}
          </div>
        </>
      ) : (
        <div className="navbar_containerOptions">
          {optionsText.map((option, index) => (
            <a className="navbar_options" key={option + index} href="#">
              {option}
            </a>
          ))}
        </div>
      )}

      <div className="navbar_containerButtons">
        <StarGithub />
        <ButtonBlue text="Download" classPersonalization="buttonblueNavBar" />
      </div>
    </Container>
  );
}
