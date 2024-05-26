import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem;

  & .images {
    display: grid;
    grid-template-columns: 350px 350px 350px 350px;
    gap: 5px;

  }

  @media only screen and (max-width: 1550px) {
    & .images {
      display: grid;
      grid-template-columns: 280px 280px 280px 280px;
    }
  }

  @media only screen and (max-width: 1200px)  {
    & .images {
      display: grid;
      grid-template-columns: 300px 300px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    & .images {
      display: grid;
      grid-template-columns: 250px 250px;
    }
  }

  @media only screen and (max-width: 600px) {
    & .images {
      display: grid;
      grid-template-columns: 180px 180px;
    }
  }

  @media (max-width: 400px) {
    & .images {
      display: grid;
      grid-template-columns: 155px 155px;
    }
  }
`;

const TextContent = styled.div`
  width: 800px;
  margin-bottom: 4rem;
  border-bottom: #6f6e6e 1px solid;
  padding: 20px;

  & h2 {
    margin-bottom: 20px;
    color: #3498db;
  }

  & p {
    color: #6f6e6e;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    width: 650px;
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    width: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

const RowImg = styled.img`
  width: 350px;
  height: 300px;

  @media (max-width: 1550px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 400px) {
    width: 155px;
    height: 155px;
  }
`;

export { ProjectsContainer, TextContent, RowImg };
