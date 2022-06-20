import { useEffect } from "react";
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
