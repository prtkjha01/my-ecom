import React from "react";
import styles from "../styles/FilterContainer.module.css";
// import { incrementCounter } from "@/store/counter/action";
// import { wrapper } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
const FilterContainer = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <div className={`${styles.superContainer}`}>
        <div>
          {/* <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
          <h1>
            Counter: <span>{counter}</span>
          </h1>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button> */}
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//   store.dispatch(incrementCounter());
// });

export default FilterContainer;
