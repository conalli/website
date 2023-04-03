import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const hoverScale = { scale: 1.1 };
const tapScale = { scale: 0.9 };

function FooterLinks() {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      className="flex w-full justify-evenly items-center text-lg text-slate-500 md:w-1/2 mx-auto"
    >
      <motion.li
        whileHover={hoverScale}
        whileTap={tapScale}
        className="hover:text-white w-1/4"
      >
        <a href="/about#contact" className="font-serif flex justify-center">
          contact<span className="text-blue-500">.</span>
        </a>
      </motion.li>
      <motion.li
        whileHover={hoverScale}
        whileTap={tapScale}
        className="hover:text-white w-1/4"
      >
        <a
          href="https://github.com/conalli"
          className="flex justify-center"
          title="Github"
        >
          <GitHubLogoIcon width={22} height={22} />
          <span className="hidden">Github</span>
        </a>
      </motion.li>
      <motion.li
        whileHover={hoverScale}
        whileTap={tapScale}
        className="hover:text-blue-500 w-1/4"
      >
        <a
          href="https://linkedin.com/in/conalli"
          className="flex justify-center"
          title="LinkedIn"
        >
          <LinkedInLogoIcon width={22} height={22} />
          <span className="hidden">LinkedIn</span>
        </a>
      </motion.li>
    </motion.ul>
  );
}

export default FooterLinks;
