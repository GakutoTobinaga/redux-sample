import { createAppSlice } from "@/lib/createAppSlice";
import { userAgent } from "next/server";

export interface UsernameSliceState {
  username: string;
  status: "signOut" | "loading" | "signIn";
}

const initialState: UsernameSliceState = {
  username: "user",
  status: "signOut",
};
// initialstateは初期値として設定する値たち
// createSliceで初期値・レデューサが入ったスライスを作成。非同期処理が欲しいならAsync verのスライス関数を使う
export const usernameSlice = createAppSlice({
  name: "usernameDefiner",
  initialState,
  // Reducersで実際に値を変更する関数を定義する
  reducers: (create) => ({
    SigninUser : create.reducer((state) => {
        state.username = "ログインユーザ", state.status = "signIn"
    }),
    SignoutUser : create.reducer((state) => {
        state.username = initialState.username, state.status = "signOut"
    })
  }),
  // セレクタでわかりやすく変換して輸出する
  // セレクタは別になくてもいいが、その場合直接counter.usernameのように選択する必要がある
  selectors: {
    selectUsername: (state) => state.username,
    selectStatus: (state) => state.status,
  },
});

// アクションを発行
export const { SigninUser, SignoutUser } = usernameSlice.actions;

// ユーザネームのセレクタを発行
export const { selectUsername, selectStatus } = usernameSlice.selectors;
