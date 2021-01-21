import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.svg" width={32} height={32} />
      </a>
    </Link>
  );
};
