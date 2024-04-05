"use client";

import { useState } from "react";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  incrementBy,
  selectCount,
  selectStatus,
  selectTobinaga,
  multiply,
  changeTobinaga,
  reset,
} from "@/lib/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const count2 = useAppSelector((state) => state.counter.value);
  const tobinaga = useAppSelector(selectTobinaga)
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("1");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className={styles.button}
          aria-label="Multiply value"
          onClick={() => dispatch(multiply(incrementValue))}
        >
          *
        </button>
        <button
          className={styles.button}
          aria-label="incrementBy"
          onClick={() => dispatch(incrementBy(4))}
        >
          + user
        </button>
        <button
          className={styles.button}
          aria-label="changeTobinaga"
          onClick={() => dispatch(changeTobinaga())}
        >
          change Tobinaga
        </button>
        <button
          className={styles.button}
          aria-label="Reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
            <div>{tobinaga}</div>
            </>
  );
};
