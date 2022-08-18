import React from "react";
import RightSidePanel from "./RightSide/RightSidePanel";
import CustomizedDialogs from "../ModalMovie";
import Form from "../Form";
import ControlledCarousel from "../carousal";
import BasicExample from "../card";

function DisplayContent(props) {
  return (
    <div>
      {/* <modal /> */}
      <div>
        <ControlledCarousel />
      </div>
      <CustomizedDialogs />
      {/* <BasicExample /> */}
      {/* <BasicExample /> */}
      <RightSidePanel />
    </div>
  );
}

export default DisplayContent;
