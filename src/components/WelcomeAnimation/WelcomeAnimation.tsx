import Lottie from "lottie-react";
import { useRef, useState } from "react";
import welcomeAnimationJson from "../../assets/lotties/welcome-animation.json";

import "./styles/welcomeAnimation.css";

export default function WelcomeAnimation() {
  const [welcomeVisibility, setWelcomeVisibility] = useState(true);
  const refWelcomeAnimation = useRef<HTMLDivElement | null>(null);

  function welcomeCompleted(): void {
    if (refWelcomeAnimation.current) {
      refWelcomeAnimation.current.style.opacity = "0";
    }

    setTimeout(() => {
      setWelcomeVisibility(false);
    }, 2000);
  }

  return (
    <>
      {welcomeVisibility ? (
        <div className="welcomeContainer" ref={refWelcomeAnimation}>
          <Lottie
            animationData={welcomeAnimationJson}
            loop={false}
            onComplete={welcomeCompleted}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
