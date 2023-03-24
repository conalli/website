import { useWindowDimensions } from "../hooks/useWindowDimensions";
import MobileNav from "./MobileNav";
import PageLinks from "./PageLinks";

const Nav = ({ currentUrl }: { currentUrl: string }) => {
  const { width } = useWindowDimensions();
  return (
    <nav>
      {width < 500 ? (
        <MobileNav currentUrl={currentUrl} />
      ) : (
        <PageLinks currentUrl={currentUrl} />
      )}
    </nav>
  );
};

export default Nav;
