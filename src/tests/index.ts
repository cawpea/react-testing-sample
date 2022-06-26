import { useEffect } from "react";
import { act } from "@testing-library/react";
import { useRecoilValue, RecoilState } from "recoil";

type Props<T> = {
  node: RecoilState<T>;
  onChange: (value: T) => void;
};

export const RecoilObserver = <T>({ node, onChange }: Props<T>) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

export const flushPromiseAndTimers = () => {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      })
  );
};
