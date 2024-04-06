import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
  tobinaga: "ok" | "ng"
}

const initialState: CounterSliceState = {
  value: 10,
  status: "idle",
  tobinaga: "ok",
};
// initialstateは初期値として設定する値たち
// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    incrementBy : create.reducer((state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }),
    changeTobinaga :create.reducer((state) => {
      if(state.tobinaga == "ok") {
        state.tobinaga = "ng"
      } else {
        state.tobinaga = "ok"
        console.log("changedTobinaga")
      }
    }),
    increment: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    }),
    decrement: create.reducer((state) => {
      state.value -= 1;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    ),
    reset: create.reducer(
      (state) => {
        state.value = initialState.value;
      },
    ),
    // 4/1 飛永付け足し, 掛け算関数
    multiply: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value *= action.payload;
      },
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value += action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
    selectTobinaga: (counter) => counter.tobinaga,
  },
});

// Action creators are generated for each case reducer function.
export const { decrement, increment, reset, incrementBy, incrementByAmount, incrementAsync, multiply, changeTobinaga } =
  counterSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectCount, selectStatus, selectTobinaga } = counterSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1 || currentValue % 2 === -1) {
      dispatch(incrementByAmount(amount));
    }
  };
