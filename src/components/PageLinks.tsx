const PageLinks = ({ currentUrl }: { currentUrl: string }) => {
  const linkStyle = (pathname: string) =>
    currentUrl === pathname ? "underline" : "";
  return (
    <ul className="flex flex-col xs:flex-row gap-2">
      <li>
        <a className={linkStyle("/")} href="/">
          Home
        </a>
      </li>
      <li>
        <a className={linkStyle("/blog")} href="/blog">
          Blog
        </a>
      </li>
      <li>
        <a className={linkStyle("/projects")} href="/projects">
          Projects
        </a>
      </li>
      <li>
        <a className={linkStyle("/about")} href="/about">
          About
        </a>
      </li>
    </ul>
  );
};

export default PageLinks;
