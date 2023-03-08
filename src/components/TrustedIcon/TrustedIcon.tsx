import { TrustedIconProps } from "../../interfaces/Interfaces";

import "./styles/trustedIcon.css";

export default function TrustedIcon({
  icon,
  textMain,
  textGeneric,
}: TrustedIconProps) {
  return (
    <div className="trustedIconContainer" data-aos="zoom-in-down">
      {icon}
      <p className="trustedIcon_textMain">{textMain}</p>
      <p className="trustedIcon_textGeneric">{textGeneric}</p>
    </div>
  );
}
