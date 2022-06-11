import React from "react";
import { Container, Grid, Card, Header } from "./style";
import { Buttom } from "../../../components/buttons/style";



export function Servicos() {
  return (
    <>
      <Header>
        <h1>
          Aqui você pode ser <strong>Bela do seu jeito!</strong>
        </h1>
      </Header>
      <Container>
        
            <Grid>
              <Card>
              <img src="./images/servicos/img01.png" alt=""/>
              <h4>PROCEDIMENTOS</h4>
              <p>Trabalhhamos com as melhores tecnologias, boas práticas e profissionais do mercado, para que você tenha toda a segurança e boa experiência na realização dos nossos procedimentos estéticos.</p>
              <a href="procedimentos"> 
              <Buttom>Saiba Mais</Buttom>
              
              </a>
              </Card>
            </Grid>

            <Grid>
              <Card>
              <img src="./images/servicos/img02.png" alt=""/>
              <h4>TRATAMENTOS</h4>
              <p>Temos uma vasta lista de tratamentos para as mais diversas causas, desde soluções para microvasos a tratamento para o bumbum. Confira e escoha o que mais se encaixa com a sua necessidade. </p>
              <a href="tratamentos"> 
              <Buttom>Saiba Mais</Buttom>
              
              </a>
              </Card>
            </Grid>

            <Grid>
              <Card>
              <img src="./images/servicos/img03.png" alt=""/>
              <h4>PRODUTOS</h4>
              <p>Possuimos diverssos produtos exclusívos como sabonete clareador, renovador e adstringete. Tudo pensado e produzido com o maior carinho e qualidade do jeito que você merece!  </p>
              <a href="produtos"> 
              <Buttom>Saiba Mais</Buttom>
              
              </a>
              </Card>
            </Grid>

            <Grid>
              <Card>
              <img src="./images/servicos/img04.png" alt=""/>
              <h4>CONSÓRCIO</h4>
              <p>Gostou nos nosso Procedimentos e Tratamentos mas no momento não tem como priorizar o auto mimo e cuidar da saúde e auto estima? Como o nosso plano de CONSÓRCIO você pode se programar com parcelinhas que caibam no seu bolso sem deixar de lado as suas prioridades.</p>
              <a href="consorcio"> 
              <Buttom>Saiba Mais</Buttom>
              
              </a>
              </Card>
            </Grid>
          
        
      </Container>

    </>
  );
}
