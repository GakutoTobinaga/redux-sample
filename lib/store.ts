import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { usernameSlice } from "./features/username/usernameSlice";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";

// `combineSlices` automatically combines the reducers using
// combine... これで各地に点在するスライスをまとめて、configureでreducerを増やさなくてもOKにする。
// conbineをしないなら点在するスライスを一個一個書かなくてはならないので、大変
const rootReducer = combineSlices(counterSlice, quotesApiSlice, usernameSlice);
// 型を抽出して手間を省く
export type RootState = ReturnType<typeof rootReducer>;

// makeStoreでは、全てのスライスやミドルウェアを設定するターミナルのような関数
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware);
    },
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;