import styled, { css } from "styled-components";

const themeH2 = {
  PcFontSize: 2,
  fontSize: 1.7,
  tabletFontSize: 1.5,
  mobileFontSize: 1.3,
};

const themeP = {
  PcFontSize: 1.2,
  fontSize: 1.1,
  tabletFontSize: 1,
  mobileFontSize: 0.9,
};

export const ContainerStyle = styled.div`
  overflow: hidden;
  & h2 {
    font-size: ${themeH2.PcFontSize}rem;
  }

  & p {
    font-size: ${themeP.PcFontSize}rem;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    & h2 {
      font-size: ${themeH2.fontSize}rem;
    }

    & p {
      font-size: ${themeP.fontSize}rem;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 900px) {
    & h2 {
      font-size: ${themeH2.tabletFontSize}rem;
    }
    & p {
      font-size: ${themeP.tabletFontSize}rem;
    }
  }

  @media only screen and (max-width: 600px) {
    & h2 {
      font-size: ${themeH2.mobileFontSize}rem;
    }
    & p {
      font-size: ${themeP.mobileFontSize}rem;
    }
  }
`;
