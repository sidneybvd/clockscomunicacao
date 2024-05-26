import React from "react";
import {
  ContactContainer,
  TextContent,
  DivBtns,
  ContactBtn,
  SolicitBtn,
} from "./styles";
import WhiteRow from "../../components/WhiteRow";

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <TextContent>
          <h2>Destaque a sua marca hoje!</h2>
          <p>
            Entre em contato conosco e descubra como podemos ajudar a tornar a
            sua identidade visual única e memorável. De sinalização corporativa
            a soluções para eventos, estamos aqui para atender às suas
            necessidades.
          </p>
        </TextContent>

        <DivBtns>
          <SolicitBtn>
            <a
              href="https://wa.me/5521981711123?text=Eu%20gostaria%20de%20fazer%20um%20orçamento!"
              target="_blank"
            >
              <span>Solicitar Orçamento</span>
            </a>{" "}
          </SolicitBtn>
        </DivBtns>
      </ContactContainer>

      <WhiteRow />
    </div>
  );
};

export default Contact;
