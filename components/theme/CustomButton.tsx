import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

import { Button__ } from "../../styles/components/button.styles";

interface IProps extends ButtonProps {
  href?: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  icon?: IconProp;
}

export const CustomButton: React.FC<IProps> = ({
  href,
  onClick,
  children,
  backgroundColor,
  textColor,
  icon,
  ...rest
}) => {
  const ButtonWithIcons = () => (
    <Button onClick={onClick} {...rest}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {children}
    </Button>
  );

  return (
    <Button__.Container backgroundColor={backgroundColor} textColor={textColor}>
      {href ? (
        <Link href={href}>
          <ButtonWithIcons />
        </Link>
      ) : (
        <ButtonWithIcons />
      )}
    </Button__.Container>
  );
};
