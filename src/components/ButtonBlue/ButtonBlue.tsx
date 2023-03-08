import { ButtonBlueProps } from "../../interfaces/Interfaces";

import "./styles/buttonBlue.css";

export default function ButtonBlue({
  text,
  classPersonalization = "",
}: ButtonBlueProps) {
  return (
    <button className={`buttonBlue ${classPersonalization}`} type="button">
      {text}
    </button>
  );
}
