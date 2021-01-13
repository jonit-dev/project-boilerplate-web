import styled from "styled-components";

import { theme } from "../../constants/theme";
import { Card__ } from "../components/card.styles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef1fa;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const LoginTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const BottomOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  a {
    display: inline;
  }

  small {
    color: ${theme.colors.mediumGray};
    font-size: 0.7rem;
    flex: 50%;
    cursor: pointer;
  }

  small:first-child {
    text-align: left;
  }
  small:last-child {
    text-align: right;
  }
`;

const LoginBox = styled(Card__.Base)`
  width: 500px;
  max-width: 500px;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;

  * {
    flex: 100%;
  }
`;

export const Auth__ = {
  Container,
  LoginTopContainer,
  LoginBox,
  BottomOptionsContainer,
};
