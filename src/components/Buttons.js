import React from "react";
import imagew from "../image/whatsapp.webp";
import imagec from "../image/call.jpeg";

export const Buttons = () => {
  return (
    <>
      <div className="button1">
        <img src={imagew} className="buttonimage"></img>
      </div>
      <div className="button1">
        <img src={imagec} className="buttonimage1"></img>
      </div>
    </>
  );
};
