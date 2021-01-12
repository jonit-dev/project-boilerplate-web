import styled from "styled-components";

import { theme } from "../../constants/theme";

const Base = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 2px 5px -2px rgba(0, 0, 0, 0.2);
  padding: 2rem 2rem;

  /*MOBILE ONLY CODE*/
  @media screen and (max-width: ${theme.breakpoints.small}) {
    margin: 1rem;
  }
`;

export const Card__ = {
  Base,
};
