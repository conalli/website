import { CustomView, isMobileOnly } from "react-device-detect";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import MobileNav from "./MobileNav";
import PageLinks from "./PageLinks";

function Nav({ currentUrl }: { currentUrl: string }) {
  const { width } = useWindowDimensions();
  return (
    <nav>
      <CustomView condition={width > 500}>
        <PageLinks currentUrl={currentUrl} />
      </CustomView>
      <CustomView condition={isMobileOnly || width <= 500}>
        <MobileNav currentUrl={currentUrl} />
      </CustomView>
    </nav>
  );
}

export default Nav;
