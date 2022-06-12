import React from "react";
import { Container, Grid, Grid1, Grid2, Grid3 } from "./style";

export function Cards() {
  return (
    <Container>
      <Grid>
        <Grid1>
          <h1>+ 7900</h1>
          <p>cm de Medidas Reduzidas</p>
        </Grid1>
        <Grid2>
          <h1>+ 900</h1>
          <p>Kg de Gorduras Eliminadas</p>
        </Grid2>
        <Grid3>
          <h1>+ 1500</h1>
          <p>Clientes beneficiadas</p>
        </Grid3>
      </Grid>
    </Container>
  );
}
