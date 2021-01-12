import Link from "next/link";
import React from "react";

interface IProps {
  children?: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const CustomButton: React.FC<IProps> = ({
  href,
  variant = "primary",
  onClick,
  children,
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a
            onClick={onClick}
            className={`button button-${variant} button-block`}
          >
            {children}
          </a>
        </Link>
      ) : (
        <a
          onClick={onClick}
          className={`button button-${variant} button-block`}
        >
          {children}
        </a>
      )}
    </>
  );
};
