import { TextArrowLinkProps } from "../../interfaces/Interfaces";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./styles/textArrowLink.css";

export default function TextArrowLink({ text }: TextArrowLinkProps) {
  return (
    <a href="#" className="textArrowLink">
      {text}
      <HiArrowNarrowRight />
    </a>
  );
}
