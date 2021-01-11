import Link from "next/link";
import React from "react";

interface IProps {
  href?: string;
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  href,
  text,
  variant = "primary",
  onClick,
}) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a
            onClick={onClick}
            className={`button button-${variant} button-block`}
          >
            {text}
          </a>
        </Link>
      ) : (
        <a
          onClick={onClick}
          className={`button button-${variant} button-block`}
        >
          {text}
        </a>
      )}
    </>
  );
};
