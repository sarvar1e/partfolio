import React from "react";
import { ContactUsComponent, InputBox, InputGroup } from "./contactusstyle";
import { BtnGroup } from "../navbar/navbarstyle";

const ContactUs = () => {
  return (
    <ContactUsComponent>
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form action="">
        <InputGroup>
          <InputBox>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
          </InputBox>
          <InputBox>
            <input type="number" placeholder="Phone number" />
            <input type="text" placeholder="Subject" />
          </InputBox>
        </InputGroup>
        <InputGroup>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <BtnGroup>
            <p>Send Message</p>
          </BtnGroup>
        </InputGroup>
      </form>
    </ContactUsComponent>
  );
};

export default ContactUs;
