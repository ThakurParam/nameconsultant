import { Box, Container, Typography } from "@mui/material";
import "./chart1,2.css";
import React from "react";
import img2 from "../image/banner-03.png";

export const Chart1 = () => {
  return (
    <>
      <Container>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <div className="divtab">
          <h1 className="textstyle">Best Name Change Consultant in India</h1>
        </div>
        <div className="divtab0">
          <p className="textx">
            Best Name Change Consultant - In a world where people are becoming
            modern day by day and are changing everything about themselves,
            including their name, because they want to be a part of the modern
            world, there are times when people are required to change their name
            due to various reasons like religious issues, astrological issues,
            and many more. We believe that change is constant in this
            fast-moving world. No matter if it’s your choice or any legal
            necessity, changing the names is one of the transformative
            experiences in our country. Dealing with paperwork is absolutely a
            flooded task for most Indians. But no worries, we have brought
            solutions for you! People with technology and resources are moving
            forward. That is why such services are started so that people don’t
            have to undergo any pressure.
          </p>
          <p className="textx0">
            The services of Best Name Change Consultants in India have begun,
            where you can directly change your names through our online
            services. For people who do not know about the name change
            consultancy, you can contact our name-changing agents, who will
            guide you and help you understand the whole process of changing your
            name.
          </p>
        </div>
        <div className="divtab">
          <h1 className="textstyle">Reason For Name Change in India</h1>
        </div>
        <div className="divtab0">
          <p>
            In India, people can change their names on a given condition that
            their names should not cause distress or harm to anybody. There are
            a few reasons why a name-changing consultancy is required, and the
            reasons have been mentioned below:-
          </p>
          <li>
            <span className="span">Divorce : </span> Another major reason for
            name changing is due to divorce between the couples. Changing names
            due to divorce is a kind of personal choice, and hence, it requires
            a lengthy procedure. Therefore, one must go for the best name change
            consultant services.
          </li>
          <li>
            <span className="span"> Religious : </span> India is full of
            diversity, where there are people with various religions. Here,
            people sometimes convert their religions, due to which name also
            should be changed. In such cases, the best name-changing consultant
            should be preferred.
          </li>
          <li>
            <span className="span">Gender : </span> It was discovered that there
            are 72 genders worldwide. When people are likely to transform into
            another gender, they change their names as well, and hence, they
            look for professional name-changing consultancy.
          </li>
          <li>
            <span className="span">Politics : </span> People who follow
            different political parties are willing to change their names
            according to the party. So they should do it by hiring the best
            name-changing consultancy services.
          </li>
          <li>
            <span className="span">Marriage : </span> Most women in India, after
            being married, seem to change their names or surnames according to
            their husbands. Couples might also hyphen their names.
          </li>
        </div>
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "100%",
              md: "100%",
            },
          }}
        >
          <div className="imagetab">
            <img  className="imaages" src={img2}></img>
          </div>
        </Box>
        <div className="divtab0">
          <h2>Eligibility For Name Changes</h2>

          <p>
            There are a few documents required to change your name in India. The
            documents are mentioned below:-
          </p>
          <li>You must be a citizen of India.</li>
          <li>You must be 18 years old or above.</li>
          <li>
            You must have a valid reason for changing your name or any of the
            reasons which are mentioned above.
          </li>
          <li>You must have your legal identity proof.</li>
        </div>
        <div className="divtab">
          <h1 className="textstyle">Document Required For Name Change</h1>
        </div>
        <div className="divtab0">
          <p>
            There are a few documents required to change your name in India. The
            documents are mentioned below:-
          </p>

          <li>Two photos of passport size.</li>
          <li>The affidavit should be signed by the deponent.</li>
          <li>Newspaper publication</li>
          <li>Two witnesses</li>
          <li>ID proof like an Aadhaar card, PAN Card, or passport</li>
          <li>A letter stating that the documents are true.</li>
        </div>
      </Container>
    </>
  );
};
