import React from "react";
import { BoxBlue, BoxGreen, BoxYelow, Container, Grid1 } from "../style";
import data from "./data";
import data_start_plus from "./data_start_plus";
import data_start_demanda from "./data_start_demanda";
import { ButtomBlue, ButtomGreen, ButtomYeloow } from "../../buttons/style";

export function PacoteStart() {
  return (
    <>
      <Container>
        {data.map((item) => (
          <Grid1 key={item.id}>
            <BoxYelow>
              <h3>{item.pacote}</h3>
            </BoxYelow>
            <h4>{item.price}</h4>
            <h2>{item.pricepromo}</h2>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item01}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item02}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item03}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item04}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item05}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item06}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item07}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item08}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item09}
            </p>
            <p>{item.item010}</p>

            <hr />

            <ButtomYeloow>
              <a href="/pacotestart" target="_blank" rel="noopener noreferrer">
                <p>Contratar</p>
              </a>
            </ButtomYeloow>
          </Grid1>
        ))}

        {data_start_plus.map((item) => (
          <Grid1 key={item.id}>
            <BoxGreen>
              <h3>{item.pacote}</h3>
            </BoxGreen>
            <h4>{item.price}</h4>
            <h2>{item.pricepromo}</h2>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item01}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item02}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item03}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item04}
            </p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>
            <p>{item.item}</p>

            <hr />
            <ButtomGreen>
              <a href="/pacotestart" target="_blank" rel="noopener noreferrer">
                <p>Contratar</p>
              </a>
            </ButtomGreen>
          </Grid1>
        ))}

        {data_start_demanda.map((item) => (
          <Grid1 key={item.id}>
            <BoxBlue>
              <h3 className="red">{item.pacote}</h3>
            </BoxBlue>

            <h4>{item.price}</h4>
            <h2>{item.pricepromo}</h2>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item01}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item02}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item03}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item04}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item05}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item06}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item07}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item08}
            </p>
            <p>
              <img src="../../../images/icons/Check.svg" alt="check" />{" "}
              {item.item09}
            </p>

            <hr />
            <ButtomBlue>
              <a href="/pacotestart" target="_blank" rel="noopener noreferrer">
                <p>Contratar</p>
              </a>
            </ButtomBlue>
          </Grid1>
        ))}
      </Container>
    </>
  );
}
