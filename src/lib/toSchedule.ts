import { type schedulesType } from "../types/schedule";

export const toSchedule = (textData: string) => {
  const scheduleData = textData.split("\n");
  console.log("schedule", scheduleData);
  const schedule: schedulesType = {};

  scheduleData.forEach((element) => {
    const [date, workTodo] = element.split(":");
    if (date && workTodo) {
      schedule[date] = workTodo;
    }
  });

  return schedule;
};
