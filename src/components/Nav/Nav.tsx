import { motion } from "framer-motion";
import { CustomView, isMobileOnly } from "react-device-detect";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import MobileNav from "./MobileNav";
import PageLinks from "./PageLinks";

function Nav({ currentUrl }: { currentUrl: string }) {
  const { width } = useWindowDimensions();
  if (width === 0) return null;
  return (
    <motion.nav
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <CustomView condition={width > 500}>
        <PageLinks currentUrl={currentUrl} />
      </CustomView>
      <CustomView condition={isMobileOnly || width <= 500}>
        <MobileNav currentUrl={currentUrl} />
      </CustomView>
    </motion.nav>
  );
}

export default Nav;
