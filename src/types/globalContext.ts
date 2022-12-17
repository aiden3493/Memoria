import { type Dispatch, type SetStateAction } from "react";
import { type schedulesType } from "./schedule";

export interface globalContextType {
  schedules: schedulesType;
  setSchedules: Dispatch<SetStateAction<schedulesType>> | undefined;
}
