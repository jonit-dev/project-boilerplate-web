import styled from "styled-components";

const Container = styled.main`
  min-height: 60.2%;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 640px) {
    min-height: 70%;
  }
`;

export const Pages__ = {
  Container,
};
