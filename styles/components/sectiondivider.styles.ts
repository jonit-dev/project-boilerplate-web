import styled from "styled-components";

import { theme } from "../../constants/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Divider = styled.span`
  border-bottom: 1px solid ${theme.colors.lightGray};
  position: relative;
  top: -0.5rem;
  flex: 40%;
`;
const DividerText = styled.span`
  border-bottom: unset;
  text-align: center;
  font-size: 0.6rem;
  color: ${theme.colors.mediumGray};
  flex: 10%;
`;

export const SectionDivider__ = {
  Container,
  Divider,
  DividerText,
};
