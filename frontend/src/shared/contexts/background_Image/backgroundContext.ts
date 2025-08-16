import { createContext} from "react";


interface BackgroundContextType {
    backgroundImage: string | null;
    setBackgroundImage: (image: string | null) => void;

}
  
export const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

