import Container from "../../components/Container/Container";
import heroLogo from "../../assets/icons/hero.png";
import ButtonOpenProjectOther from "../../components/ButtonOpenProjectOther/ButtonOpenProjectOther";

import "./styles/apresentation.css";

export default function Apresentation() {
  const imagesLinks = {
    gitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  };

  return (
    <Container classPersonalization="containerApresentation">
      <div className="apresentation_textsContainer">
        <p className="apresentation_textsMain">Building digital</p>
        <p className="apresentation_textsMain">products & brands.</p>
        <p className="apresentation_textExplanation">
          This free and open-source landing page template was built using the
          utility classes from Tailwind CSS and based on the components from the
          Flowbite Library and the Blocks System.
        </p>
        <div className="apresentation_buttonsContainer">
          <ButtonOpenProjectOther
            imageLink={imagesLinks.gitHub}
            text="View on GitHub"
          />
          <ButtonOpenProjectOther
            imageLink={imagesLinks.figma}
            text="Get Figma file"
          />
        </div>
      </div>

      <div className="apresentation_imageContainer">
        <img src={heroLogo} alt="Logo Hero" />
      </div>
    </Container>
  );
}
