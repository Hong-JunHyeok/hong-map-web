import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [state, setState] = useState<boolean>(defaultValue ?? false);

  return [state, () => setState((prev) => !prev), setState] as const;
};

export default useToggle;
