import styled from "styled-components";

export const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  & ul {
    display: flex;
    gap: 3rem;
    margin: 0;
    padding: 0;
  }

  & ul li {
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
  }

  & img {
    width: 100px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 900px) {
    justify-content: center;

    & img {
        display: none;
    }
  }
`;
