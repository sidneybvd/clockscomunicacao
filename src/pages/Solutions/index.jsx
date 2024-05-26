import React from "react";
import {
  SolutionContainer,
  SolutionContent,
  TextContent,
  Checktitle,
  Img,
} from "./styles";

const Solutions = () => {
  return (
    <SolutionContainer>
      <SolutionContent>
        <div className="text-top">
          <h2>Soluções de Identificação Visual</h2>
          <p>
            Nossas soluções de identificação visual são projetadas para destacar
            a sua marca e criar um impacto duradouro. De sinalização corporativa
            a elementos visuais para eventos, oferecemos tudo o que você precisa
            para se destacar.
          </p>
        </div>

        <TextContent>
          <Checktitle>
            <div className="check">
              <img src="src/assets/checkmark-sharp.svg" alt="Check" />
            </div>
            <h3>Sinalização Corporativa</h3>
          </Checktitle>
          <div>
            <p>
              Criamos soluções de sinalização personalizadas para empresas de
              médio e grande porte, garantindo uma identidade visual consistente
              e impactante.
            </p>
          </div>
        </TextContent>
        <TextContent>
          <Checktitle>
            <div className="check">
              <img src="src/assets/checkmark-sharp.svg" alt="Check" />
            </div>
            <h3>Sinalização para Eventos</h3>
          </Checktitle>
          <div>
            <p>
              Oferecemos opções de sinalização temporária para conferências,
              feiras e festivais, garantindo que seu evento se destaque e seja
              memorável.
            </p>
          </div>
        </TextContent>
        <TextContent>
          <Checktitle>
            <div className="check">
              <img src="src/assets/checkmark-sharp.svg" alt="Check" />
            </div>
            <h3>Sinalização para Estabelecimentos Comerciais</h3>
          </Checktitle>
          <div>
            <p>
              Nossos elementos visuais são projetados para lojas, restaurantes e
              consultórios médicos, ajudando a atrair clientes e criar uma
              experiência memorável.
            </p>
          </div>
        </TextContent>
      </SolutionContent>

      <Img
        className="fantastico"
        src="src/assets/fantastico.jpg"
        alt="Foto de trabalho"
      />
    </SolutionContainer>
  );
};

export default Solutions;
