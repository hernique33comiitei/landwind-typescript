import airbnbLogo from "../../assets/imagesPartner/airbnb.svg";
import googleLogo from "../../assets/imagesPartner/google.svg";
import microsoftLogo from "../../assets/imagesPartner/microsoft.svg";
import mulLogo from "../../assets/imagesPartner/mul.svg";
import spotifyLogo from "../../assets/imagesPartner/spotify.svg";
import mashableLogo from "../../assets/imagesPartner/mashable.svg";

import "./styles/partnerImages.css";
import Container from "../Container/Container";

export default function PartnerImages() {
  return (
    <Container classPersonalization="partnerImagesContainer">
      <img src={airbnbLogo} alt="Icons partner" />
      <img src={googleLogo} alt="Icons partner" />
      <img src={microsoftLogo} alt="Icons partner" />
      <img src={mulLogo} alt="Icons partner" />
      <img src={spotifyLogo} alt="Icons partner" />
      <img src={mashableLogo} alt="Icons partner" />
    </Container>
  );
}
