import { useState } from "react";
import "../../styles/createcomponent.css";
import PopOver from "./PopOver";

const Createcomponent = () => {
  const [info, setInfo] = useState({
    focused: false,
    backgroundOptions: false,
    activeBackgroundColor: null,
    activeBackgroundImage: null,
  });
  const toggleBackgroundOptions = (val) => {
    setInfo((prev) => ({
      ...prev,
      backgroundOptions: val ? val : !prev.backgroundOptions,
    }));
  };

  const handleBackgroundChangeOption = (type, val) => {
    setInfo((prev) => ({
      ...prev,
      [type]: val,
    }));
  };
  return (
    <div className="createComponentParentContainer">
      <div
        className="createComponentcontainer"
        style={{
          backgroundColor: info?.activebackgroundColor?.value || "",
          backgroundImage: `url(${info?.activeBackgroundImage?.value})`,
        }}
      >
        {info?.focused && (
          <div
            className="titleContentInputContainer"
            contentEditable="true"
            spellCheck="false"
            aria-multiline="true"
            role="textbox"
            data-placeholder="Title"
          ></div>
        )}
        <div
          className="notesContentInputContainer"
          contentEditable="true"
          spellCheck="false"
          aria-multiline="true"
          role="textbox"
          data-placeholder="Take a Note..."
          onFocus={() => setInfo((prev) => ({ ...prev, focused: true }))}
        ></div>
        <div className="noteFooterContainer">
          <div className="colorPalletBtn" onClick={toggleBackgroundOptions}>
            <i class="fa-solid fa-palette"></i>
          </div>
          <button className="closeBtn" >Close</button>
        </div>
      </div>
      <PopOver
        open={info?.backgroundOptions}
        onClose={toggleBackgroundOptions}
        handleBackgroundChangeOption={handleBackgroundChangeOption}
      />
    </div>
  );
};

export default Createcomponent;
