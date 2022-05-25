import { renderHook, act } from "@testing-library/react";
import { useCalculator } from "./index";

describe("useCalculator", () => {
  test("set default value", () => {
    const { result, rerender } = renderHook(
      (value: number) => useCalculator(value),
      {
        initialProps: 0,
      }
    );
    expect(result.current.currentValue).toBe(0);

    rerender(10);
    expect(result.current.currentValue).toBe(10);
  });

  test("add value", async () => {
    const { result } = renderHook(() => useCalculator(0));
    // 分割代入を使うと値が固定されるため、直接参照する
    // ref: https://github.com/testing-library/react-hooks-testing-library/issues/134
    expect(result.current.currentValue).toBe(0);

    act(() => {
      result.current.add(3);
    });

    expect(result.current.currentValue).toBe(3);
  });

  test("subtract value", () => {
    const { result } = renderHook(() => useCalculator(0));
    expect(result.current.currentValue).toBe(0);

    act(() => {
      result.current.sub(3);
    });

    expect(result.current.currentValue).toBe(-3);
  });

  test("multiply value", () => {
    const { result } = renderHook(() => useCalculator(5));
    expect(result.current.currentValue).toBe(5);

    act(() => result.current.multi(3));

    expect(result.current.currentValue).toBe(15);
  });

  test("divide value", () => {
    const { result } = renderHook(() => useCalculator(10));
    expect(result.current.currentValue).toBe(10);

    act(() => result.current.div(2));

    expect(result.current.currentValue).toBe(5);
  });
});
