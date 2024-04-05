"use client"
import { selectStatus } from "@/lib/features/counter/counterSlice";
import { useAppSelector } from "@/lib/hooks";
import { Counter } from "../components/counter/Counter";
export default function VerifyPage() {
  const status = useAppSelector(selectStatus);
  return (
    <>
      <h1>Verify page</h1>
      <div>{status}</div>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
      <Counter/>
    </>
  );
}
