import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={32} height={32} />
    </Link>
  );
};

const Container = styled.div``;
