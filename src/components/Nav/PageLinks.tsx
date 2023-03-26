type PageLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  name: string;
  href: string;
};

const pages: PageLink[] = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/blog" },
  { name: "about", href: "/about" },
];

const isCurrentURL = (url: string, pathname: string) => url === pathname;
const linkStyle = (url: string) => {
  return (pathname: string) =>
    isCurrentURL(url, pathname)
      ? /*tw*/ "underline underline-offset-4 decoration-yellow-500 cursor-default shadow"
      : "";
};

function PageLinks({ currentUrl }: { currentUrl: string }) {
  const pathStyles = linkStyle(currentUrl);
  return (
    <ul className="bg-black flex flex-col xs:flex-row gap-2 divide-solid divide-y-2 xs:divide-y-0 xs:divide-x-2 divide-slate-400">
      {pages.map((l) => (
        <li key={l.href} className="px-4">
          <a className={pathStyles(l.href)} href={l.href}>
            {l.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
