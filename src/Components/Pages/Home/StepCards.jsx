import React from "react";
import Image1 from "./stepImages/1.png";
import Image2 from "./stepImages/2.png";
import Image3 from "./stepImages/3.png";
import Image4 from "./stepImages/4.png";
import Image5 from "./stepImages/5.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function steps() {
  return (
    <div>
      <div className="outer">
        <div className="step">
          <img className="steps-image" src={Image1} />
        </div>
        <ChevronRightIcon className="icon" />
        <div className="step">
          <img  className="steps-image" src={Image2} />
        </div>
        <ChevronRightIcon className="icon" />
        <div  className="step">
          <img className="steps-image" src={Image3} />
        </div>
        <ChevronRightIcon className="icon" />

        <div className="step">
          <img className="steps-image" src={Image4} />
        </div>
        <ChevronRightIcon className="icon" />
        <div className="step">
          <img className="steps-image" src={Image5} />
        </div>
      </div>
    </div>
  );
}
export default steps;
