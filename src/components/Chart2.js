import { Box, Container, Grid } from "@mui/material";
import "./chart1,2.css";
import React from "react";
import image from "../image/counting.png";
import image1 from "../image/email.png";
import image2 from "../image/consultation.png";
import image3 from "../image/file.png";
import image4 from "../image/payment.png";
import image5 from "../image/stopwatch.png";
import img from "../image/post-column-04.png";
import img1 from "../image/post-column-05.png";
import img2 from "../image/post-column-06.jpg";
import img3 from "../image/images.jpg";

export const Chart2 = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingTop: "40px" }}>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <h1>Why Choose Name Change Consultant</h1>
        <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
          <Grid item xs={12} md={3} lg={3}>
            <div className="divtab00">
              <div className="divtab000">
                <p>satisfied</p>
                <p>1000+Satisfied Clients</p>
              </div>
              <div>
                <img src={img} className="images"></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className="divtab00">
              <div className="divtab000">
                <p>satisfied</p>
                <p>1000+Satisfied Clients</p>
              </div>
              <div>
                <img src={img1} className="images"></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className="divtab00">
              <div className="divtab000">
                <p>satisfied</p>
                <p>1000+Satisfied Clients</p>
              </div>
              <div>
                <img src={img2} className="images"></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div className="divtab00">
              <div className="divtab000">
                <p>satisfied</p>
                <p>1000+Satisfied Clients</p>
              </div>
              <div>
                <img src={img3} className="images"></img>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="divtab0">
          <p className="text000">
            Everybody is not educated or high-tech in life. There are many
            people who require experts to change their names because they are
            not educated enough or don’t have time. Below are the reasons that
            people consult the best name change consultancy in India.
          </p>
          <ol>
            <li>
              As mentioned above, there are people who don’t know the proper
              procedure that needs to be followed to change their name, so they
              require the advice of some experts so that they don’t have any
              difficulty.
            </li>
            <li>
              In a fast-moving world, people don’t have time to change their
              names. It is an essential thing that needs to be corrected, but
              corporate people don’t have time for such things, so they hire the
              best name-change consultancy services.
            </li>
            <li>
              The agents that work in the name change consultancy have all the
              knowledge about the procedure and will guide you if there is any
              change in any policy or documents.
            </li>
            <li>
              No matter how informative a person is, an intelligent person can
              also make some mistakes when changing their name so it is
              beneficial to hire the best name change consultancy in India.
            </li>
          </ol>
          <p>
            The best name change consultancy in India is YourDoorstep, which
            provides you with the best services and gets your name changed
            quickly and easily. There are other consultancies that provide such
            services, but these will guide you according to your needs.
          </p>
          <ul>
            <li className="li">
              <span className="span">Marriage </span> (Want Husband Sir Name)
            </li>
            <li className="li">
              <span className="span">Re Marriage </span> (New life with New
              Name)
            </li>
            <li className="li">
              <span className="span"> Astrology Reasons </span> (Guidance by
              pandit ji)
            </li>
            <li className="li">
              <span className="span">Religion change </span> (Due to love
              Marriage)
            </li>
            <li className="li">
              <span className="span">Name wrongly in </span> Records (Due to
              parents mistake)
            </li>
            <li className="li">
              <span className="span">Spelling Errors </span> (Typing mistake by
              Gov)
            </li>
            <li className="li">
              <span className="span">Dissatisfaction </span> with names (Not
              happy wiyh name)
            </li>
          </ul>
        </div>
      </Container>
      <Box
        sx={{ bgcolor: "#6787FE", paddingBottom: "80px", paddingTop: "50px" }}
      >
        <Container maxWidth="lg">
          <h1>How It Works</h1>
          <p>
            We provide best name change consultant which provide reliable
            solution for your name change in your legal document
          </p>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image} className="image"></img>
              </div>
              <p>Select Name</p>
              <p>Change Consultant</p>
            </Grid>

            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image1} className="image"></img>
              </div>
              <p>Send Inquiry</p>
            </Grid>

            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image2} className="image"></img>
              </div>
              <p>Ask Question About</p>
              <p>Name Change</p>
            </Grid>
            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image3} className="image"></img>
              </div>
              <p>Send Document For</p>
              <p>Name correction</p>
            </Grid>
            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image4} className="image"></img>
              </div>
              <p>Pay Online</p>
            </Grid>
            <Grid item xs={12} lg={2} sx={{ padding: "10px" }}>
              <div className="divimage">
                <img src={image5} className="image"></img>
              </div>
              <p>Work Start</p>
            </Grid>
          </Grid>
          {/* <div className="imagediv">
            <div>
              <div className="divimage">
                <img src={image} className="image"></img>
              </div>
              <p>Select Name</p>
              <p>Change Consultant</p>
            </div>
            <div>
              <div className="divimage">
                <img src={image1} className="image"></img>
              </div>
              <p>Send Inquiry</p>
            </div>
            <div>
              <div className="divimage">
                <img src={image2} className="image"></img>
              </div>
              <p>Ask Question About</p>
              <p>Name Change</p>
            </div>
            <div>
              <div className="divimage">
                <img src={image3} className="image"></img>
              </div>
              <p>Send Document For</p>
              <p>Name correction</p>
            </div>
            <div>
              <div className="divimage">
                <img src={image4} className="image"></img>
              </div>
              <p>Pay Online</p>
            </div>

            <div>
              <div className="divimage">
                <img src={image5} className="image"></img>
              </div>
              <p>Work Start</p>
            </div>
          </div> */}
        </Container>
      </Box>
    </>
  );
};
