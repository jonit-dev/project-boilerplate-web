import { useEffect } from "react";

import { HomeStyled } from "../styles/home.styles";

export default function Home() {
  useEffect(() => {});

  return (
    <HomeStyled.Container>
      <HomeStyled.H1>Hello World!</HomeStyled.H1>
    </HomeStyled.Container>
  );
}
