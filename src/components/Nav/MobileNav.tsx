import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MobileNavIcon from "./MobileNavIcon";
import PageLinks from "./PageLinks";

function MobileNav({ currentUrl }: { currentUrl: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Popover.Root open={open}>
        <Popover.Trigger asChild>
          <button onClick={() => setOpen((prev) => !prev)}>
            <MobileNavIcon isOpen={open} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="">
            <Popover.Arrow />
            <AnimatePresence>
              <motion.div
                key="pagelinks"
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", duration: 0.3 },
                }}
                exit={{ opacity: 0, y: -50 }}
              >
                <PageLinks currentUrl={currentUrl} />
              </motion.div>
            </AnimatePresence>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default MobileNav;
