import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem;
  gap: 3rem;
  background-color: #f4f4f3;

  & h2 {

    color: #000;
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
    width: 300px;
  }
`;

const DivBtns = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  gap: 2rem;

  & button {
    height: 45px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    & button {
      height: 35px;
    }
  }

  @media only screen and (max-width: 600px) {
    & button {
      height: 30px;
    }
  }
`;

const ContactBtn = styled.button`
  width: 100px;
  background-color: #f4f4f3;
  color: #6f6e6e;
  border: #6f6e6e solid 1px;

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    & span {
      font-size: .9rem;
    }
    width: 90px;
  }

  @media only screen and (max-width: 600px) {
    & span {
      font-size: .9rem;
    }
    width: 90px;
  }
`;

const SolicitBtn = styled.button`
  width: 200px;
  background-color: #3498db;
  color: #fff;
  border: none;
  transition: 0.6s;

  &:hover {
    background-color: #f4f4f3;
    color: #6f6e6e;
    border: #6f6e6e solid 1px;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    & span {
      font-size: .9rem;
    }
    width: 160px;
  }

  @media only screen and (max-width: 600px) {
    & span {
      font-size: .9rem;
    }
    width: 160px;
  }
`;

export { ContactContainer, TextContent, DivBtns, ContactBtn, SolicitBtn }
