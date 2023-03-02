import Container from "../../components/Container/Container";
import ItensChecked from "../../components/ItensChecked/ItensChecked";
import { GraphicsProps } from "../../interfaces/Interfaces";

import "./styles/graphics.css";

export default function Graphics({ ...props }: GraphicsProps) {
  return (
    <div className="graphicsBackground">
      <Container
        classPersonalization={`graphicsContainer ${props.rowOrRowReverse}`}>
        <div className="graphicOne_textsContainer">
          <p className="graphicOne_textMain">{props.title}</p>
          <p className="graphicOne_textAssistant">{props.textGenericOne}</p>
          <ItensChecked arrayTask={props.tasksArray} />
          <p className="graphicOne_textAssistant">{props.textGenericTwo}</p>
        </div>
        <div className="graphicOne_imageContainer">
          <img src={props.image} alt="" />
        </div>
      </Container>
    </div>
  );
}
