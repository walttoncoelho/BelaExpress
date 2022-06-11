import React from "react";
import { Banner, Banner1, Banner2, Container, Grid0, Grid1, Grid2, Grid3} from "./style";
import { Galery } from "./data/galery";
import { Localizacao } from "../Home/Localizacao/Localizacao";
export function Sobre() {
  return (
    <>

      <Banner>
        <Banner1>
          <h4>
           Reconhecida na 1ª edição do Prêmio Beleza Mais Top, pela responsabilidade social e qualidade de serviços prestados no estado do Maranhão em 2021.
          </h4>
        </Banner1>
        <Grid1>        
          <img src="./images/sobre/premio.png" alt="Premio" />
        </Grid1>
      </Banner>
      <Banner2>
        <Grid1>        
          <img src="./images/sobre/selo.png" alt="Selo" />
        </Grid1>
        <Banner1>
          <h4>
           Reconhecida na 1ª edição do Prêmio Beleza Mais Top, pela responsabilidade social e qualidade de serviços prestados no estado do Maranhão em 2021.
          </h4>
        </Banner1>
      </Banner2>



      <Container>
        <Grid0>
        <Grid1>
          <h2>Nossa Misssão</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt repellat animi optio accusamus, quisquam consectetur quos voluptas impedit fugiat ipsum, iure, quas nobis rerum neque doloribus molestiae est. Animi?
          </p>
        </Grid1>
        <Grid2>
          <Galery />
        </Grid2>
        </Grid0>
      </Container>
      <Container>
        <Grid0>
        <Grid3>
        <img src="./images/sobre/visao.png" alt="Faxada" />
        </Grid3>
        <Grid1>
          <h2>Nossa Visão</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt repellat animi optio accusamus, quisquam consectetur quos voluptas impedit fugiat ipsum, iure, quas nobis rerum neque doloribus molestiae est. Animi?
          </p>
        </Grid1>
        </Grid0>
      </Container>









      <Localizacao />
 
    </>
  );
}
