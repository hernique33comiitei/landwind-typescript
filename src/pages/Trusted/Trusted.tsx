import { HiServer } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";

import Container from "../../components/Container/Container";
import TextArrowLink from "../../components/TextArrowLink/TextArrowLink";
import TrustedIcon from "../../components/TrustedIcon/TrustedIcon";

import "./styles/trusted.css";

export default function Trusted() {
  return (
    <Container classPersonalization="trustedContainer">
      <div className="trusted_divTexts">
        <p className="trusted_textTrustedWorldwide">Trusted Worldwide</p>
        <p className="trusted_textMain">
          Trusted by over 600 million users and 10,000 teams
        </p>
        <p className="trusted_textGeneric">
          Our rigorous security and compliance standards are at the heart of all
          we do. We work tirelessly to protect you and your customers.
        </p>
        <TextArrowLink text="Explore Legality Guide" />
        <TextArrowLink text="Visit the Trust Center" />
      </div>
      <div className="trusted_divIcons">
        <div className="trusted_containerForTwoTrustedIcons">
          <TrustedIcon
            icon={<HiServer />}
            textMain="99.99% uptime"
            textGeneric="For Landwind, with zero maintenance downtime"
          />
          <TrustedIcon
            icon={<BsFillPeopleFill />}
            textMain="600M+ Users"
            textGeneric="Trusted by over 600 milion users around the world"
          />
        </div>
        <div className="trusted_containerForTwoTrustedIcons">
          <TrustedIcon
            icon={<BiWorld />}
            textMain="100+ countries"
            textGeneric="Have used Landwind to create functional websites"
          />
          <TrustedIcon
            icon={<IoMdCart />}
            textMain="5+ Million"
            textGeneric="Transactions per day"
          />
        </div>
      </div>
    </Container>
  );
}
