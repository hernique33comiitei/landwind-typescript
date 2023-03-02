import { ItensCheckedProps } from "../../interfaces/Interfaces";
import { AiFillCheckCircle } from "react-icons/ai";

import "./styles/itensChecked.css";

export default function ItensChecked({ arrayTask }: ItensCheckedProps) {
  return (
    <div className="itensCheckedContainer">
      {arrayTask.map((task, index) => (
        <p className="itensChecked_task" key={index + task}>
          <AiFillCheckCircle color="#6c2bd9" />
          {task}
        </p>
      ))}
    </div>
  );
}
