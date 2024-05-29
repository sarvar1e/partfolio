import styled from "styled-components";

export const EducationComponent = styled.div`
  padding: 100px 15px;
  background-color: #131313;

  .heading {
    font-size: 8rem;
    text-align: center;
    margin: 5rem 0;
  }
  h2 {
    margin-bottom: 5rem;
  }
`;

export const TimeLineItems = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: #00ffee;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const TimeLineItem = styled.div`
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(odd) {
    padding-right: calc(50% + 30px);
    text-align: right;
  }

  &:nth-child(even) {
    padding-left: calc(50% + 30px);
  }
`;

export const TimeLineDot = styled.div`
  height: 21px;
  width: 21px;
  background-color: #00ffee;
  box-shadow: 0 0 25px #00ffee, 0 0 50px #00ffee;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  top: 10px;
`;
export const TimeLineDate = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin: 6px 0 15px;
`;
export const TimeLineContent = styled.div`
  background-color: black;
  border: 3px solid #00ffee;
  padding: 30px 50px;
  border-radius: 4rem;
  box-shadow: 0 0 10px #00ffee;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px #00ffee;
  }
  h3 {
    font-size: 20px;
    color: white;
    margin: 0 0 10px;
    font-weight: 500;
  }
  p {
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
  }
`;
