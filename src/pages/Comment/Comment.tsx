import Container from "../../components/Container/Container";
import { FaQuoteLeft } from "react-icons/fa";

import personComment from "../../assets/persons/michael-gouch.png";

import "./styles/comment.css";

export default function Comment() {
  return (
    <div className="commentDiv">
      <Container classPersonalization="containerComment">
        <FaQuoteLeft className="iconQuoteComment" />
        <p className="commentText">
          "Landwind is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
        <div className="commentPersonInfoDiv">
          <img
            className="commentImagePerson"
            src={personComment}
            alt="Person comment"
          />
          <p className="commentNamePerson">Micheal Gough</p>
          <p className="commentOfficePerson">CEO at Google</p>
        </div>
      </Container>
    </div>
  );
}
