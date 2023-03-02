import Container from "../Container/Container";
import logo from "../../assets/icons/logo.svg";
import ButtonBlue from "../ButtonBlue/ButtonBlue";

import "./styles/navbar.css";
import StarGithub from "../StarGithub/StarGithub";

export default function Navbar() {
  const optionsText = [
    "home",
    "company",
    "marketplace",
    "features",
    "team",
    "contact",
  ];

  return (
    <Container classPersonalization="containerPersonalizeNavbar">
      <div className="navbar_containerLogo">
        <img className="navbar_logo" src={logo} alt="Logo" />
        <p className="navbar_textMain">Landwind</p>
      </div>

      <div className="navbar_containerOptions">
        {optionsText.map((option, index) => (
          <a className="navbar_options" key={option + index} href="#">
            {option}
          </a>
        ))}
      </div>

      <div className="navbar_containerButtons">
        <StarGithub />
        <ButtonBlue text="Download" />
      </div>
    </Container>
  );
}
