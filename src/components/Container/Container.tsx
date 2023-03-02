import { ContainerProps } from "../../interfaces/Interfaces";

import "./styles/container.css";

export default function Container({
  children,
  classPersonalization = "", // DEFAULT VALUE -> '='
}: ContainerProps) {
  return <div className={`container ${classPersonalization}`}>{children}</div>;
}
