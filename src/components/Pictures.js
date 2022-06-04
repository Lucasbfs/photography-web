import { useState, useEffect, Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import animations from "./data/animations";
import images from "./data/images";
import GridTransf from "./GridTransf";
// import nature1 from "../assets/images/DSC00371.JPG";

function Pictures() {
  const [gridIsActive, setGridIsActive] = useState(false);
  const [cardViewIsActive, setCardViewIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const randChoice = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  };

  const transfToGrid = (e) => {
    setGridIsActive(!gridIsActive);
  };

  const openCardView = (e, index) => {
    e.preventDefault();
    setCardViewIsActive(true);
    setSelectedIndex(index);
  };
  console.log(selectedIndex);

  const closeCardView = () => {
    setCardViewIsActive(false);
  };

  return (
    <Fragment>
      <button onClick={transfToGrid}>
        <GridTransf />
      </button>
      {!gridIsActive ? (
        <div>
          {images.map((image) => (
            <div>
              <h1 className="title-no-grid">{image.title}</h1>
              <img
                key={image.id}
                className="picture-img"
                data-aos={randChoice(animations)}
                data-aos-delay="50"
                src={image.image}
                alt="nature1"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid-container">
          {images.map((image, index) => (
            <div>
              <div className="grid-item">
                <h1 className="title-with-grid">{image.title}</h1>
                <button onClick={(e) => openCardView(e, index)}>
                  <img
                    key={image.id}
                    className="grid-item grid-img"
                    data-aos={randChoice(animations)}
                    data-aos-delay="50"
                    src={image.image}
                    alt="nature1"
                  />
                </button>
              </div>
            </div>
          ))}

          {cardViewIsActive && (
            <div className="backdrop" onClick={closeCardView}>
              <div className="card-view">
                <img
                  key={images.id}
                  className="grid-item card-view-img"
                  src={images[selectedIndex].image}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default Pictures;
