import { motion, Variants } from "framer-motion";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import MobileNav from "./MobileNav";
import PageLinks from "./PageLinks";

const MOBILE_MAX_WIDTH = 500;

const controls: Variants = {
  none: {
    opacity: 1,
  },
  init: {
    opacity: 0,
    y: 10,
  },
  anim: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

function Nav({ currentUrl }: { currentUrl: string }) {
  const { width } = useWindowDimensions();
  if (width === 0) return null;
  return (
    <motion.nav variants={controls} initial={"init"} animate={"anim"}>
      {width < MOBILE_MAX_WIDTH ? (
        <MobileNav currentUrl={currentUrl} />
      ) : (
        <PageLinks currentUrl={currentUrl} />
      )}
    </motion.nav>
  );
}

export default Nav;
