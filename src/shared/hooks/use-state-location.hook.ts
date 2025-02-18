import { Crypta } from "shared/types/crypta.types";
import { useLocation } from "react-router";

export const useStateLocation = () => {
  const location = useLocation();
  const currency: Crypta = location.state;
  localStorage.setItem("currency", JSON.stringify({ ...currency }));
  return { currency, location };
};
