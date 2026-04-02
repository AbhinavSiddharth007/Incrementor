import { useState } from "react";

type UseCounterReturn = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
  isDecrementDisabled: boolean;
};

export function useCounter(initialCount = 0): UseCounterReturn {
  const safeInitialCount = Math.max(initialCount, 0);
  const [count, setCount] = useState(safeInitialCount);

  function incrementCount() {
    setCount((currentCount) => currentCount + 1);
  }

  function decrementCount() {
    setCount((currentCount) => Math.max(currentCount - 1, 0));
  }

  function resetCount() {
    setCount(safeInitialCount);
  }

  return {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    isDecrementDisabled: count === 0,
  };
}
