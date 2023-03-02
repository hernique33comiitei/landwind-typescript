import { BsStar } from "react-icons/bs";

import "./styles/starGithub.css";

export default function StarGithub() {
  return (
    <a className="containerStarGithub" href="#">
      <div className="starGithub_containerStarIcon">
        <BsStar />
        <p className="starGithub_textStarIcon">Star</p>
      </div>
      <div className="starGithub_containerNumber">
        <p className="starGithub_Number">308</p>
      </div>
    </a>
  );
}
