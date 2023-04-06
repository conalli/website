import { atom } from "nanostores";

export const loadingAtom = atom(true);

export const loadingComplete = () => loadingAtom.set(false);
