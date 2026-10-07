import { useState } from "react";
import "../../styles/popover.css";
import { COLORS } from "./Colors";
import { BACKGROUND_IMAGES } from "./images";

const initialState = {
  backgroundImage: null,
  backgroundColor: null,
};
const PopOver = ({ open, onClose , handleBackgroundChangeOption }) => {
  const [info, setInfo] = useState(initialState);
  const colors = COLORS;
  const images = BACKGROUND_IMAGES;
  console.log("color", colors);

    const handleColorClick = (color) => {
    setInfo((prev) => ({
      ...prev,
      backgroundColor: color,
    }));
    handleBackgroundChangeOption("activebackgroundColor", color);
  };
  const handleImageClick = (img) => {
    setInfo((prev) => ({
      ...prev,
      backgroundImage: img,
    }));
    handleBackgroundChangeOption("activeBackgroundImage", img);
  };
  return (
    open && (
      <>
        <div className="popOverLay" onClick={() => onClose(false)}></div>
        <div className="popOverParentContainer">
          <div className="backgroundColorContainer">
            <div
              className="slashDropIconContainer"
              style={{
                borderColor:
                  info?.backgroundColor === null
                    ? "#984fd3"
                    : info.backgroundColor,
              }}
               onClick={() => handleColorClick(null)}
            >
              <i class="fa-solid fa-droplet-slash"></i>
            </div>
            {colors?.map((color) => (
                 console.log("individual color:", color),
              <BackgoundColorComponent
                key={color.id}
                bgColor={color?.value}
                active={info?.backgroundColor?.id === color?.id}
                onClick={()=>handleColorClick(color)}
              />
            ))}
          </div>
          <div className="backgroundImageContainer">
            <div
              className="slashDropImageContainer"
              style={{
                borderColor:
                  info?.backgroundColor === null
                    ? "#984fd3"
                    : info.backgroundColor,
              }}
               onClick={() => handleImageClick(null)}
            >
              <i class="fa-solid fa-crop"></i>
            </div>
            {images?.map((image) => (
              <BackgoundImageComponent
                key={image.id}
                bgImage={image?.value}
                active={info?.backgroundImage?.id === image?.id}
                onClick={()=>handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default PopOver;

const BackgoundColorComponent = ({ bgColor, active, onClick }) => {
  return (
    <div
      className="backgroundColorComponent"
      style={{ backgroundColor: bgColor,  border: active ? "2px solid #984fd3" : "", }}
      onClick={onClick}
    ></div>
  );
};
const BackgoundImageComponent = ({ bgImage, active, onClick }) => {
  return (
    <div
      className="backgroundImageComponent"
      style={{ backgroundImage: `url(${bgImage})`,  border: active ? "2px solid #984fd3" : "", }}
      onClick={onClick}
    ></div>
  );
};
