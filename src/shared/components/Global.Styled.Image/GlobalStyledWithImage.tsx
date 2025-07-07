import { $GlobalStyled } from "../../../global.styled"; // ajuste o caminho se necessário
import { useBackground } from "../../hooks"; // ajuste o caminho se necessário

export function GlobalStyledWithImage() {
  const { backgroundImage } = useBackground();
  return <$GlobalStyled backgroundImage={backgroundImage} />;
}
