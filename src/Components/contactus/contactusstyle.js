import styled from "styled-components";

export const ContactUsComponent = styled.div`
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
  span {
    color: #00ffee;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 5rem auto;
    text-align: center;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 100%;
    padding: 2.5rem;
    font-size: 1.8rem;
    color: white;
    background: black;
    border-radius: 2rem;
    border: 2px solid #00ffee;
    margin: 1.5rem 0;
    resize: none;
  }
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  input {
    width: 100%;
    padding: 2.5rem;
    font-size: 1.8rem;
    color: white;
    background: black;
    border-radius: 2rem;
    border: 2px solid #00ffee;
    margin: 1.5rem 0;
    resize: none;
  }
`;
