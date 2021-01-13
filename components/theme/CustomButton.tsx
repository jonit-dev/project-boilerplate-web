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
  iconSlot?: "start" | "end";
}

export const CustomButton: React.FC<IProps> = ({
  href,
  onClick,
  children,
  backgroundColor,
  textColor,
  icon,
  iconSlot,
  ...rest
}) => {
  const ButtonWithIcons = () => (
    <Button onClick={onClick} {...rest}>
      {icon && iconSlot === "start" && (
        <FontAwesomeIcon
          icon={icon}
          className="button-icon button-icon-start"
        />
      )}
      {children}
      {icon && iconSlot === "end" && (
        <FontAwesomeIcon icon={icon} className="button-icon button-icon-end" />
      )}
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
