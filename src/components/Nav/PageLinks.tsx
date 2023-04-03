import { combineStyles } from "@utils/styles";

type PageLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  name: string;
  href: string;
  afterBg: string;
  decoration: string;
};

const pages: PageLink[] = [
  {
    name: "home",
    href: "/",
    afterBg: "after:bg-red-500",
    decoration: "decoration-red-500",
  },
  {
    name: "projects",
    href: "/projects",
    afterBg: "after:bg-green-500",
    decoration: "decoration-green-500",
  },
  {
    name: "blog",
    href: "/blog",
    afterBg: "after:bg-yellow-500",
    decoration: "decoration-yellow-500",
  },
  {
    name: "about",
    href: "/about",
    afterBg: "after:bg-blue-500",
    decoration: "decoration-blue-500",
  },
];

const isCurrentURL = (url: string, pathname: string) => url === pathname;
const linkStyle = (url: string) => {
  return (pathname: string) =>
    isCurrentURL(url, pathname) ? /*tw*/ "underline cursor-default" : "under";
};

function PageLinks({ currentUrl }: { currentUrl: string }) {
  const bg = currentUrl === "/" ? "bg-transparent" : "bg-bgDark";
  const pathStyles = linkStyle(currentUrl);
  return (
    <ul
      className={
        bg +
        " flex flex-col xs:flex-row gap-2 divide-solid divide-y-2 xs:divide-y-0 xs:divide-x-2 divide-slate-400"
      }
    >
      {pages.map((l) => (
        <li key={l.href} className="px-4">
          <a
            className={combineStyles(
              pathStyles(l.href),
              l.afterBg,
              l.decoration,
              " py-2 decoration-2 underline-offset-4"
            )}
            href={l.href}
          >
            {l.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
