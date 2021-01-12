import React from "react";

import { Pages__ } from "../../styles/components/page.styles";
import { Footer } from "../pages/landing/Footer";
import { Header } from "../pages/landing/Header";

interface IProps {
  children?: React.ReactElement;
}

export const InternalPage: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header variant="static" />

      <Pages__.Container className="container">{children}</Pages__.Container>

      <Footer />
    </>
  );
};
