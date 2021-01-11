import styled from "styled-components";

import { Card__ } from "../components/card.styles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled(Card__.Base)`
  width: 500px;
  max-width: 500px;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;

  .logo-container {
    flex: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }

  .login-box-body {
    flex: 100%;
  }
`;

export const Login__ = {
  Container,
  LoginBox,
};
