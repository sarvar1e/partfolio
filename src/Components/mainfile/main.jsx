import React from "react";
import {
  BtnGroup,
  HomeContent,
  HomePhoto,
  Homewrapper,
  SocialIcons,
} from "../navbar/navbarstyle";
import image1 from "../assets/IMG_1200.jpg";
import EducationC from "../education/educationmain";
import ContactUs from "../contactus/contuctus";

const MainPaige = () => {
  return (
    <>
      <HomeContent>
        <Homewrapper>
          <h1>
            Hi, It's&nbsp; <span> Sarvar</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>{" "}
          </h3>
          <p>
            Hi, I’m Sarvar, a passionate Full Stack Developer with 1 years of
            experience. I specialize in creating dynamic and responsive web
            applications using modern frameworks like React and Node.js. My
            background in both front-end and back-end development allows me to
            seamlessly integrate user experiences with robust server-side
            functionality. I thrive in collaborative environments and love
            solving complex problems through innovative coding solutions. Let’s
            build something amazing together!
          </p>

          <SocialIcons>
            <div className="social">
              <box-icon name="linkedin" type="logo"></box-icon>
            </div>
            <div className="social">
              <box-icon name="instagram" type="logo" color="#00ffee"></box-icon>
            </div>
            <div className="social">
              <box-icon name="telegram" type="logo" color="#00ffee"></box-icon>
            </div>
            <div className="social">
              <box-icon name="github" type="logo" color="#00ffee"></box-icon>
            </div>
          </SocialIcons>

          <BtnGroup>
            <p>Hire</p>
            <p className="button">Contact</p>
          </BtnGroup>
        </Homewrapper>
        <HomePhoto>
          <img src={image1} alt="" />
        </HomePhoto>
      </HomeContent>
      <EducationC />
      <ContactUs />
    </>
  );
};

export default MainPaige;
