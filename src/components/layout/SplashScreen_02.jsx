import React, { useEffect, useState } from "react";

const SplashPage = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "WELCOME";
  const typingDelay = 100;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        currentText += textToType[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingDelay);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-darkBg">
      <h1 className="text-7xl font-light text-primary font-arial">
        {typedText}
      </h1>
    </div>
  );
};

export default SplashPage;
