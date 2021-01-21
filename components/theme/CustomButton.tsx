import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Button, ButtonProps } from "react-bootstrap-v5";

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
  const BaseButton = () => (
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

  interface ButtonBlockProps {
    children?: React.ReactNode;
  }

  const ButtonBlock: React.FC<ButtonBlockProps> = ({ children }) => (
    <div className="d-grid gap-2">{children}</div>
  );

  interface ButtonLinksProps {
    href: string;
    children?: React.ReactNode;
  }

  const ButtonLink: React.FC<ButtonLinksProps> = ({ href, children }) => (
    <Link href={href}>{children}</Link>
  );

  const onRenderLinkedButton = () =>
    href ? (
      <ButtonLink href={href}>
        <BaseButton />
      </ButtonLink>
    ) : (
      <BaseButton />
    );

  const onRenderButton = () => {
    return rest.block ? (
      <ButtonBlock>{onRenderLinkedButton()}</ButtonBlock>
    ) : (
      onRenderLinkedButton()
    );
  };

  return (
    <Button__.Container backgroundColor={backgroundColor} textColor={textColor}>
      {onRenderButton()}
    </Button__.Container>
  );
};
