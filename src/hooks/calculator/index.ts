import { useState } from "react";

type Calculation = (newValue: number) => void;

type UseCalculator = {
  (value: number): {
    currentValue: number;
    add: Calculation;
    sub: Calculation;
    multi: Calculation;
    div: Calculation;
  };
};

export const useCalculator: UseCalculator = (value) => {
  const [currentValue, setCurrentValue] = useState<number>(value);

  const add: Calculation = (newValue) =>
    setCurrentValue(currentValue + newValue);
  const sub: Calculation = (newValue) =>
    setCurrentValue(currentValue - newValue);
  const multi: Calculation = (newValue) =>
    setCurrentValue(currentValue * newValue);
  const div: Calculation = (newValue) =>
    setCurrentValue(currentValue / newValue);

  return {
    currentValue,
    add,
    sub,
    multi,
    div,
  };
};
