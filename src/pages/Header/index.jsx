import React from "react";
import Navbar from "../../components/Navbar";
import { HeaderContainer, HeaderContent, Back } from "./styles";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Back src="src/assets/teste.jpg" alt="" />
        <Navbar />
        <HeaderContent>
          <img src="src/assets/Logo-branco.svg" alt="" className="logo" />

          <a
            href="https://wa.me/5521981711123?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!"
            target="_blank"
            className="link-contact"
          >
            <img
              src="src/assets/whatsapp-256.png"
              alt="Símbolo do Whatsapp"
              className="logo-img"
            />
            <span className="number">
              <span className="ddd">(21)</span> 981711123
            </span>
          </a>
          <a
            href="https://www.instagram.com/clocks.comunicacao/"
            target="_blank"
          >
            <img
              src="src/assets/insta-logo.png"
              alt="Símbolo do instagram"
              className="logo-img"
            />
            <span>CLOCKS.COMUNICACAO</span>
          </a>

          <p>
            Nossos profissionais combinam criatividade, precisão e serviço
            excepcional para tornar a sua identidade visível e memorável em
            qualquer ambiente. Seja notado e lembrado!
          </p>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
};

export default Header;
