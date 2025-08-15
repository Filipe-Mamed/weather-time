import type React from "react";
import { GlobalWrapper } from "../../../global.styled"; // ajuste o caminho se necessário
import { useBackground } from "../../hooks"; // ajuste o caminho se necessário

interface GlobalStyledWithImageProps {
  children?: React.ReactNode;
}


export function GlobalStyledWithImage({children}: GlobalStyledWithImageProps) {
  const { backgroundImage } = useBackground();
  return(
    <GlobalWrapper backgroundImage={backgroundImage}>
      {children}
    </GlobalWrapper>
  )
}
