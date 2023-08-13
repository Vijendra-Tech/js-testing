import { useState } from "react";

export const useLoggedIn = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  setTimeout(() => {
    setIsLoggedIn(true);
  }, 100);

  return {isLoggedin};
};
