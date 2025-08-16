import { useContext } from "react";
import { BackgroundContext } from "../contexts/background_Image/backgroundContext";

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error(
      "useBackground deve ser usado dentro de um BackgroundProvider"
    );
  }

  return context;
};