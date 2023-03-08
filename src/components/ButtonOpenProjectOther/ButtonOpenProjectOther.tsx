import { ButtonOpenProjectOtherProps } from "../../interfaces/Interfaces";

import "./styles/buttonOpenProjectOther.css";
import "./styles/mqButtonOpenProjectOther.css";

export default function ButtonOpenProjectOther({
  imageLink,
  text,
}: ButtonOpenProjectOtherProps) {
  return (
    <a href="#" className="buttonOpenProjectOtherContainer">
      <img
        className="buttonOpenProjectOtherContainer_image"
        src={imageLink}
        alt="Logo Icon"
      />
      {text}
    </a>
  );
}
