import React from "react";

import { Pages__ } from "../../styles/theme/page.styles";
import { Footer } from "../landing/Footer";
import { Header } from "../landing/Header";

export const InternalPage: React.FC = () => {
  return (
    <>
      <Header variant="static" />

      <Pages__.Container className="container">
        <h1>Page here</h1>
      </Pages__.Container>

      <Footer />
    </>
  );
};
