import { welcome } from "@utils/cli";
import { useState } from "react";

const pages = "/ /projects /blog /about";

const evaluateCommand = (command: string): string | null => {
  const cd = command.split("cd ");
  switch (true) {
    case command === "ls":
      return pages;
    case cd.length > 1:
      return cd[1];
    default:
      return null;
  }
};

function CLI() {
  const [command, setCommand] = useState<string>("");
  const [output, setOutput] = useState<string[]>([]);
  if (command.length !== 0) {
    const result = evaluateCommand(command);
    if (result && result === pages) {
      setOutput((prev) => [...prev, pages]);
      setCommand("");
    }
    if (result && result !== pages) {
      window.location.assign(result);
    }
  }
  return (
    <div className="bg-black w-full h-full font-mono text-green-500">
      <div className="h-3/5 p-[0.1rem]">
        <pre className="text-[0.15rem] ">{welcome}</pre>
        <p className="text-[0.2rem] py-[0.1rem]">
          I&rsquo;m Conall, a software engineer based in Tokyo.
        </p>
        <p className="text-[0.2rem] py-[0.1rem]">
          Feel free to take a look around
        </p>
        {output.length > 0 &&
          output.map((o, idx) => (
            <p key={`${idx}${o}`} className=" bg-black text-[0.25rem]">
              {o}
            </p>
          ))}
        <p className="text-[0.2rem] py-[0.1rem]">{command}</p>
      </div>
      {/* <input
        className="font-bold text-[0.25rem] bg-black h-1/5 w-full caret-green-500"
        onChange={(e) => setCommand(e.target.value)}
      /> */}
    </div>
  );
}

export default CLI;
