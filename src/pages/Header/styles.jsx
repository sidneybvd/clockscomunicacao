import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  background-color: #000;
  background-size: cover;
  background-position: center;
  height: 800px;

  @media only screen and (max-width: 1600px) {
    height: 600px;
  }

  @media only screen and (max-width: 1199px) {
    height: 500px;
  }

  @media only screen and (max-width: 600px) {
    height: 450px;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;

  & p {
    font-size: 1.2rem;
    color: #fff;
    margin-top: 150px;
    margin-bottom: 140px;

    @media (max-width: 1545px) {
      margin-top: 100px;
      margin-bottom: 100px;
    }

    @media (max-width: 1299px) {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    @media only screen and (min-width: 900px) and (max-width: 1200px) {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }

    @media only screen and (min-width: 600px) and (max-width: 900px) {
      margin-top: 30px;
      font-size: 0.9rem;
      width: 400px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 0.9rem;
      margin-bottom: 0px;
    }
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  & .logo {
    height: 200px;

    @media only screen and (max-width: 1545px) {
      height: 150px;
    }

    @media only screen and (min-width: 600px) and (max-width: 900px) {
      margin-top: 40px;
      height: 130px;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 20px;
      height: 120px;
    }
  }

  & .link-contact {
    margin-bottom: 10px;
  }

  & .logo-img {
    width: 35px;
  }

  & .number {
    font-size: 40px;

    @media only screen and (min-width: 600px) and (max-width: 900px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 25px;
    }
  }

  & .ddd {
    font-size: 12px;
  }
`;

const Back = styled.img`
  height: 100%;
  width: 100%;
  opacity: 65%;
`;

export { HeaderContainer, HeaderContent, Back };
