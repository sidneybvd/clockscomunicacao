import styled from "styled-components";

const SolutionContainer = styled.div`
  background-color: #f4f4f3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  padding: 5rem;
  gap: 5rem;
  height: 600px;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    padding: 9rem;
    gap: 3rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 9rem;
    gap: 3rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 11rem;
    gap: 3rem;
  }
`;

const SolutionContent = styled.div`
  width: 800px;

  & h2,
  h3 {
    color: #3498db;
    font-weight: 700;
    margin-bottom: 7px;
  }

  & p {
    color: #6f6e6e;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 300px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 550px;
  }

  @media only screen and (max-width: 600px) {
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .text-top {
      width: 350px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    & .text-top {
      width: 300px;
    }
  }
`;

const TextContent = styled.div`
  margin-top: 30px;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    width: 320px;
  }
`;

const Checktitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & div {
    background-color: #d6eaf8;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & img {
    width: 14px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50px;

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

export { SolutionContainer, SolutionContent, TextContent, Checktitle, Img };
