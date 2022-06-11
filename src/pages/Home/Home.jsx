import React from "react";
import { BannerTopo } from "./Banner/BannerTopo";
import { AutoEstima } from "./AutoEstima/AutoEstima";
import { Servicos } from "./Servicos/Servicos";
import { Videos } from "./Videos/Videos";
import { Localizacao } from "./Localizacao/Localizacao";
import { Parceiro } from "./Parceiros/Parceiros";
import { Faq } from "./Faq/Faq";

export function Home() {
  return (
    <>
      <BannerTopo />     
      <Servicos />
      <Videos />     
      <AutoEstima />
      <Localizacao />      
      <Faq title="Dúvidas Frequêntes"/>
      <Parceiro title="Parceiros"/>
    </>
  );
}
