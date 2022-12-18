import { type schedulesType } from "../types/schedule";

export const toSchedule = (textData: string) => {
  const scheduleData = textData.replaceAll(" ", "").split("\n");
  const schedule: schedulesType = {};

  scheduleData.forEach((element) => {
    const [date, workTodo] = element.split(":");
    if (date && workTodo) {
      schedule[date] = workTodo;
    }
  });

  console.log(schedule);

  return schedule;
};
