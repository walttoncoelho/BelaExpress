import React from "react";
import { Procedimentos } from "./data/procedimentos";

import {
  Banner,
  Title,
 
} from "./styles/style";

export function ProcedimentosPage() {
  return (
    <>
      <Banner>
        <Title>
            <h1>
                Procedimentos
            </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, atque
            eligendi voluptatem et ad magni optio dolores? Quo ducimus amet.
          </h3>
        </Title>
      </Banner>

      <Procedimentos />


    </>
  );
}
