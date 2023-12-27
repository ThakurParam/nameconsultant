import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export const Topbutton = () => {
  const [isVisible, setisVisible] = useState(false);

  const toscroll = () => {
    let Height = 250;
    const scrollArea =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollArea > Height) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toscroll);
  }, []);

  return (
    { isVisible } && (
      <div className="to-btn" onClick={gotobtn}>
        <ArrowUpwardIcon fontSize="small" />
      </div>
    )
  );
};
