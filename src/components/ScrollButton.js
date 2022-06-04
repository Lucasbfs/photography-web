import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    // const scrolled = document.documentElement.scrollTop; //get scroll action and save it inside a variable
    // if (scrolled > 300) {
    //   //greater than 300 milisec
    //   setVisible(true);
    // } else if (scrolled <= 300) {
    //   setVisible(false);
    // }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* I can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <button
        type="button"
        onClick={scrollToTop}
        className={visible ? "opacity-btn" : "opacity-zero"}
      >
        <FaArrowCircleUp
          onClick={scrollToTop}
          aria-hidden="true"
          className="h-6 w-6"
        />
      </button>
    </div>
  );
};

export default ScrollButton;
