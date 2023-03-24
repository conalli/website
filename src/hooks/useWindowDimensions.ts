import { useSyncExternalStore } from "react";

type WindowDimensions = {
  width: number;
  height: number;
};

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getWidthSnapshot = (): number => {
  return window.innerWidth;
};

const getHeightSnapshot = (): number => {
  return window.innerHeight;
};

const getServerSnapshot = (): number => {
  return 0;
};

export const useWindowDimensions = (): WindowDimensions => {
  const width = useSyncExternalStore(
    subscribe,
    getWidthSnapshot,
    getServerSnapshot
  );
  const height = useSyncExternalStore(
    subscribe,
    getHeightSnapshot,
    getServerSnapshot
  );
  return { width, height };
};
