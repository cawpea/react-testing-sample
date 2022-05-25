import { FC, useState } from "react";
import { useCalculator } from "../../hooks/calculator";

export const Calculator: FC = () => {
  const [newValue, setNewValue] = useState<number>(0);
  const { currentValue, add, sub, multi, div } = useCalculator(0);

  return (
    <section>
      <h1>Calculator</h1>
      <output>{currentValue}</output>
      <fieldset>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(Number(e.target.value))}
        />
        <button type="button" onClick={() => add(newValue)}>
          Plus
        </button>
        <button type="button" onClick={() => sub(newValue)}>
          Minus
        </button>
        <button type="button" onClick={() => multi(newValue)}>
          Times
        </button>
        <button type="button" onClick={() => div(newValue)}>
          Div
        </button>
      </fieldset>
    </section>
  );
};
