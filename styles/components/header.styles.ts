import styled from "styled-components";

import { theme } from "../../constants/theme";

interface IContainerProps {
  variant: "relative" | "static";
}

const Container = styled.header<IContainerProps>`
  background-color: ${(props) =>
    props.variant === "static" ? theme.colors.lightGray : "transparent"};
`;

export const Header__ = {
  Container,
};
