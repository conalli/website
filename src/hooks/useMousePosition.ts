import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = (): MousePosition => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPositionX(e.clientX);
      setPositionY(e.clientY);
    };
    window.addEventListener("mousemove", updatePosition);

    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return { x: positionX, y: positionY };
};
