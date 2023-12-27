import { Box, Container } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const Footer1 = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#F0F2F5" }}>
        <Container maxWidth="lg" sx={{ bgcolor: "white", padding: "20px" }}>
          <ul className="list0">
            <li>
              <TwitterIcon className="icon" />
              Twitter
            </li>
            <li>
              <FacebookOutlinedIcon />
              Facebook
            </li>
            <li>
              <LinkedCameraOutlinedIcon />
              Instagram
            </li>
            <li>
              <SmartDisplayOutlinedIcon />
              Youtube
            </li>
            <li>
              <PinterestIcon />
              Pinterest
            </li>
            <li>
              <SportsEsportsIcon />
              Discord
            </li>
          </ul>
        </Container>
      </Box>
    </>
  );
};
