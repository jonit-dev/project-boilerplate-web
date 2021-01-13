import React from "react";

import { SectionDivider__ } from "../../styles/components/sectiondivider.styles";

interface IProps {
  children?: string;
}

export const SectionDivider: React.FC<IProps> = ({ children }) => {
  return (
    <SectionDivider__.Container>
      <SectionDivider__.Divider className="divider-left"></SectionDivider__.Divider>
      <SectionDivider__.DividerText>{children}</SectionDivider__.DividerText>
      <SectionDivider__.Divider className="divider-right"></SectionDivider__.Divider>
    </SectionDivider__.Container>
  );
};
