"use client";

import { useCounter } from "../hooks/useCounter";

type CounterProps = {
  title?: string;
};

const actionButtonClassName =
  "inline-flex h-12 items-center justify-center rounded-full px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const iconButtonClassName = `${actionButtonClassName} w-12 px-0`;

export default function Counter({ title = "Track every click" }: CounterProps) {
  const {
    count,
    decrementCount,
    incrementCount,
    isDecrementDisabled,
    resetCount,
  } = useCounter();

  function handleIncrement() {
    incrementCount();
  }

  function handleDecrement() {
    decrementCount();
  }

  function handleClear() {
    resetCount();
  }

  return (
    <section className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.75)] sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Current count
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>
        </div>
        <output
          aria-live="polite"
          className="text-6xl font-semibold tracking-tight text-amber-300 sm:text-7xl"
          data-testid="count-value"
        >
          {count}
        </output>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          className={`${iconButtonClassName} bg-amber-400 text-slate-950 hover:bg-amber-300`}
          data-testid="increment-btn"
          onClick={handleIncrement}
          type="button"
        >
          <span className="sr-only">Increment</span>
          <span aria-hidden="true" className="text-lg">
            +
          </span>
        </button>

        <button
          className={`${iconButtonClassName} border border-white/20 bg-white/8 text-white hover:bg-white/14 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-white/45`}
          data-testid="decrement-btn"
          disabled={isDecrementDisabled}
          onClick={handleDecrement}
          type="button"
        >
          <span className="sr-only">Decrement</span>
          <span aria-hidden="true" className="text-lg">
            -
          </span>
        </button>

        <button
          className={`${actionButtonClassName} bg-white px-5 text-slate-950 hover:bg-slate-100`}
          data-testid="clear-btn"
          onClick={handleClear}
          type="button"
        >
          Clear it
        </button>
      </div>
    </section>
  );
}
