import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Logo: React.FC = () => {
  return <Image src="/logo.svg" width={32} height={32} />;
};

const Container = styled.div``;
