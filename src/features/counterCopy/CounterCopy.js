import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "../counterCopy/counterCopySlice";
import styles from "./CounterCopy.module.css";

function CounterCopy() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Link className="btn" to="/">
        Counter
      </Link>
      <div className={styles.row}>
        <button
          onClick={() => dispatch(decrement())}
          className={styles.button}
          aria-label="Decrement value"
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className={styles.textbox}
          aria-label="Set increment amount"
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          className={styles.button}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

export default CounterCopy;
