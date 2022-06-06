import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = (props) => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* I can also use 'smooth' behaviour
         in place of 'auto' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={scrollToTop}
        className={visible ? "opacity-zero" : "opacity-btn"}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
      >
        {hover && (
          <div className="hover-text-top">
            <p>
              <strong>Go to top</strong>
            </p>
          </div>
        )}
        <FaArrowCircleUp
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-hidden="true"
          color="black"
        />
      </button>
    </div>
  );
};

export default ScrollButton;
