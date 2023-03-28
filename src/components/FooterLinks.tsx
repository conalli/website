import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
const FooterLinks = () => {
  return (
    <ul className="flex w-full flex-even">
      <li>
        <a href="https://github.com/conalli">
          <GitHubLogoIcon />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/conalli">
          <LinkedInLogoIcon />
        </a>
      </li>
      <li>
        <a href="/about#contact">contact me</a>
      </li>
    </ul>
  );
};

export default FooterLinks;
