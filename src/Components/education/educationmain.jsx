import React from "react";
import {
  EducationComponent,
  TimeLineContent,
  TimeLineDate,
  TimeLineDot,
  TimeLineItem,
  TimeLineItems,
} from "./educatonstyle";

const EducationC = () => {
  return (
    <EducationComponent>
      <h2 className="heading">Education</h2>

      <TimeLineItems>
        <TimeLineItem>
          <TimeLineDot />
          <TimeLineDate>2020</TimeLineDate>
          <TimeLineContent>
            <h3>High School</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              sed est soluta asperiores ut sint dolor eligendi fugiat ullam
              adipisci doloremque earum velit ipsam quae, voluptate aut sequi
              labore. Optio.
            </p>
          </TimeLineContent>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineDot />
          <TimeLineDate>2022</TimeLineDate>
          <TimeLineContent>
            <h3>High School</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              sed est soluta asperiores ut sint dolor eligendi fugiat ullam
              adipisci doloremque earum velit ipsam quae, voluptate aut sequi
              labore. Optio.
            </p>
          </TimeLineContent>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineDot />
          <TimeLineDate>2022</TimeLineDate>
          <TimeLineContent>
            <h3>University</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              sed est soluta asperiores ut sint dolor eligendi fugiat ullam
              adipisci doloremque earum velit ipsam quae, voluptate aut sequi
              labore. Optio.
            </p>
          </TimeLineContent>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineDot />
          <TimeLineDate>2024</TimeLineDate>
          <TimeLineContent>
            <h3>Be Corder</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              sed est soluta asperiores ut sint dolor eligendi fugiat ullam
              adipisci doloremque earum velit ipsam quae, voluptate aut sequi
              labore. Optio.
            </p>
          </TimeLineContent>
        </TimeLineItem>
      </TimeLineItems>
    </EducationComponent>
  );
};

export default EducationC;
