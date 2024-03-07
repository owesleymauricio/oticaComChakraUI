'use client'
import React, { useEffect, useState } from "react";
import Conteudo from "@/components/conteudo";
import Rodape from "@/components/rodape";
import Topo from "@/components/topo";


export default function Home() {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
  setIsSSR(false);
  }, []);
  return (
    <>
      <Topo />
      <Conteudo />
      <Rodape />
    </>
  );
}
