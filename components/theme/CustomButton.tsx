import Link from "next/link";
import React from "react";
import { Button, ButtonProps } from "react-bootstrap";

interface IProps extends ButtonProps {
  href?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<IProps> = ({
  href,
  onClick,
  children,
  ...rest
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <Button onClick={onClick} {...rest}>
            {children}
          </Button>
        </Link>
      ) : (
        <Button onClick={onClick} {...rest}>
          {children}
        </Button>
      )}
    </>
  );
};
