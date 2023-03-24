import * as Popover from "@radix-ui/react-popover";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import PageLinks from "./PageLinks";

const MobileNav = ({ currentUrl }: { currentUrl: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Popover.Root open={open}>
        <Popover.Trigger asChild>
          <button onClick={() => setOpen((prev) => !prev)}>
            <HamburgerMenuIcon width={20} height={20} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="bg-gray-200">
            <PageLinks currentUrl={currentUrl} />
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};

export default MobileNav;
