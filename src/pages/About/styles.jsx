import styled from "styled-components";

const AboutContainer = styled.div`
  height: 550px;
  padding: 1rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 900px) {
    height: 800px;
    padding: 4rem;
  }
`;

const TextContent = styled.div`
  text-align: center;
  width: 1300px;

  @media (max-width: 1545px) {
    width: 800px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 600px;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  width: 1300px;

  @media (max-width: 1299px) {
    width: 800px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 600px;
    flex-direction: column;
    gap: 0.2rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.2px;
  }
`;

const Characteristcs = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  & h3 {
    font-weight: 700;
    font-size: 1rem;
  }

  & img {
    width: 50px;
    opacity: 0.7;
  }

  @media only screen and (min-width: 600px) {
    width: 250px;

    & h3 {
      font-size: 0.9rem;
    }

    & img {
      width: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    & h3 {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;

export { AboutContainer, TextContent, AboutContent, Characteristcs };
