import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const hamburgerControls: Variants = {
  init: { opacity: 0, x: 10 },
  anim: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.2 },
  },
  out: { opacity: 0, x: -20 },
};

const crossControls: Variants = {
  init: { opacity: 0, x: -10 },
  anim: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.2 },
  },
  out: { opacity: 0, x: 20 },
};

function MobileNavIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isOpen ? (
        <motion.div
          key="hamburger"
          variants={hamburgerControls}
          initial="init"
          animate="anim"
          exit="out"
        >
          <HamburgerMenuIcon width={20} height={20} />
        </motion.div>
      ) : (
        <motion.div
          key="cross"
          variants={crossControls}
          initial="init"
          animate="anim"
          exit="out"
        >
          <Cross1Icon width={20} height={20} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavIcon;
