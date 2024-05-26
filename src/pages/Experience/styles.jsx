import styled from "styled-components";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f4f4f3;
  padding: 5rem;
  gap: 3.5rem;

  & h2 {
    color: #3498db;
  }

  & p {
    color: #6f6e6e;
  }
`;
const TextContent = styled.div`
  width: 800px;

  & h2 {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 600px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Numbers = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 600px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    justify-content: center;
    gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
  
`;

export { ExperienceContainer, TextContent, Numbers }