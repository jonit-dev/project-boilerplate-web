import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  text: string;
  variant: "primary" | "secondary";
}

export const Button: React.FC<IProps> = ({
  href,
  text,
  variant = "primary",
}) => {
  return (
    <>
      <Link href={href}>
        <a className={`button button-${variant} button-block`}>{text}</a>
      </Link>
    </>
  );
};
