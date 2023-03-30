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
    <div className="bg-black w-full h-full font-mono relative">
      {output.length > 0 &&
        output.map((o, idx) => (
          <p key={`${idx}${o}`} className=" bg-black text-[0.25rem]">
            {o}
          </p>
        ))}

      <input
        className="font-bold text-[0.25rem] bg-black absolute bottom-0 w-full caret-green-500"
        onChange={(e) => setCommand(e.target.value)}
        value={command}
      />
    </div>
  );
}

export default CLI;
