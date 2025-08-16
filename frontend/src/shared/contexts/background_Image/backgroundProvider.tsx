import { useState } from "react";
import { BackgroundContext } from "./backgroundContext";

export const BackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  return (
    <BackgroundContext.Provider value={{ backgroundImage, setBackgroundImage }}>
      {children}
    </BackgroundContext.Provider>
  );
};
