import React from "react";
import { FormContato } from "../../components/forms/contato/FormContato";

import { Container, Grid1, Grid2, Grid3, Grid4, Grid5 } from "./style";

export function Contato() {
  return (
    <>
      <Container>
        <Grid1>
          <Grid2>
            <FormContato />
          </Grid2>
        </Grid1>
        <Grid3>
          <Grid4>
            <h2>Onde estamos</h2>
            <p>
              Clínica Bela Express Estética <br />
              Rua 20 quadra 27 n 23 - Conj. Hab. Turu, São Luís - MA, 65066-620
            </p>
          </Grid4>

          <Grid5>
            <div>
              <iframe
                className="inframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.022824097056!2d-44.22671148524418!3d-2.4993655981787444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69329f9eb3e8b%3A0xbcbbf2f096abf39b!2sBela%20Express%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1652100021493!5m2!1spt-BR!2sbr"
                title="Localização"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Grid5>
        </Grid3>
      </Container>
    </>
  );
}
