// import { FaCloud } from "react-icons/fa6";
import {$ImagemIcon} from "./Img.Styled"

interface Props {
  temp: number;
  description: string;
  icon: string
}

export function _TemperatureDisplay({ temp, description, icon }: Props) {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <div className="text-center mt-4">
        <span className="fs-5 fw-bold">Temperatura {Math.round(temp)}°C</span>
      </div>
      <div className="text-center mt-3">
        <p className="fs-5 fw-medium">
          {capitalize(description)} <$ImagemIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Ícone do clima" />
        </p>
      </div>
    </>
  );
}
