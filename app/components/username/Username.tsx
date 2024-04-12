"use client";

import { useState } from "react";

import { SigninUser,SignoutUser,selectStatus,selectUsername } from "@/lib/features/username/usernameSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((usernameDefiner) => usernameDefiner.username);

  return (
    <>
    <div>
        {}
    </div>
    </>
  );
};
