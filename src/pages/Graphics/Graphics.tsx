import Container from "../../components/Container/Container";
import ItensChecked from "../../components/ItensChecked/ItensChecked";
import { GraphicsProps } from "../../interfaces/Interfaces";

import "./styles/graphics.css";

export default function Graphics(props: GraphicsProps) {
  return (
    <div
      className="graphicsBackground"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="500"
      data-aos-delay="300">
      <Container
        classPersonalization={`graphicsContainer ${props.rowOrRowReverse}`}>
        <div className="graphicOne_textsContainer">
          <p className="graphicOne_textMain">{props.title}</p>
          <p className="graphicOne_textAssistant">{props.textGenericOne}</p>
          <ItensChecked arrayTask={props.tasksArray} />
          <p className="graphicOne_textAssistant">{props.textGenericTwo}</p>
        </div>
        <div className="graphicOne_imageContainer">
          <img src={props.image} alt="graphic" />
        </div>
      </Container>
    </div>
  );
}
