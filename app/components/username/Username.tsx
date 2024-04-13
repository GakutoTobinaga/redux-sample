"use client";

import { useState } from "react";
import { UseSelector } from "react-redux";
import { SigninUser,SignoutUser,selectStatus,selectUsername } from "@/lib/features/username/usernameSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
export const Username = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUsername);
  const status = useAppSelector(selectStatus);
  
  return (
    <>
    <div>
        {username}
        {status}
    </div>
    <button onClick={() => dispatch(SigninUser())}></button>
    <button onClick={() => dispatch(SignoutUser())}></button>
    </>
  );
};
