import React from "react";

type Props<T> = {
  values: T[];
  renderItem: (value: T) => React.ReactNode;
  getKey: (value: T) => React.Key;
  className?: string;
};

export default async function List<T = unknown>({
  values,
  renderItem,
  getKey,
  className,
}: Props<T>) {
  return (
    <ul className={className}>
      {values.map((value) => (
        <React.Fragment key={getKey(value)}>{renderItem(value)}</React.Fragment>
      ))}
    </ul>
  );
}
