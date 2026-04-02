import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  it("increments, decrements, and resets without going below 0", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.incrementCount();
      result.current.incrementCount();
    });

    expect(result.current.count).toBe(2);

    act(() => {
      result.current.decrementCount();
      result.current.decrementCount();
      result.current.decrementCount();
    });

    expect(result.current.count).toBe(0);
    expect(result.current.isDecrementDisabled).toBe(true);

    act(() => {
      result.current.incrementCount();
      result.current.resetCount();
    });

    expect(result.current.count).toBe(0);
  });
});
