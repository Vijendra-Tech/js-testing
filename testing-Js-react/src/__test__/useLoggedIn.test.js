import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLoggedIn } from "../hooks/useLogin";
import { useState } from "react";

test("use Loogged in hook can give true response", async () => {
  const {isLoggedin} =  renderHook(() => useLoggedIn());
  expect(isLoggedin).toEqual(true)
});
