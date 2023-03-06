import { useEffect } from "react";
import AOS from "aos";

import WelcomeAnimation from "./components/WelcomeAnimation/WelcomeAnimation";
import Navbar from "./components/Navbar/Navbar";
import Apresentation from "./pages/Apresentation/Apresentation";
import PartnerImages from "./components/PartnerImages/PartnerImages";
import Graphics from "./pages/Graphics/Graphics";
import graphicOneImage from "./assets/graphics/feature-1.png";
import graphicTwoImage from "./assets/graphics/feature-2.png";
import Trusted from "./pages/Trusted/Trusted";
import Comment from "./pages/Comment/Comment";

import "./styles/app.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const tasksGraphics = [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ];

  return (
    <div className="App">
      <WelcomeAnimation />
      <Navbar />
      <Apresentation />
      <PartnerImages />
      <Graphics
        title="Work with tools you already use"
        textGenericOne="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
        tasksArray={tasksGraphics}
        textGenericTwo="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        image={graphicOneImage}
        rowOrRowReverse="row"
      />
      <Graphics
        title="Work with tools you already use"
        textGenericOne="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
        tasksArray={tasksGraphics}
        textGenericTwo="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        image={graphicTwoImage}
        rowOrRowReverse="row-reverse"
      />
      <Trusted />
      <Comment />
    </div>
  );
}

export default App;
