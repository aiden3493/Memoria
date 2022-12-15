import { type Dispatch, type SetStateAction } from "react";
import { type schedulesType } from "./schedule";

export type globalContextType = {
  schedules: schedulesType | Record<string, never>;
  setSchedules: Dispatch<SetStateAction<schedulesType>> | undefined;
};
