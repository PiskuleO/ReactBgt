import { createContext } from "react";

export const waxpriceContext = createContext<
  | {
      waxprice: number;
      setWaxprice: (waxprice: number) => void;
    }
  | undefined
>(undefined);
