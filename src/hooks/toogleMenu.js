import { useState } from "react";

export function toggleMenu() {
  const [toggle, setToggle] = useState(false);

  return {
    toggle,
    setToggle,
  };
}
