"use client";

import React, { useState, useRef, useEffect } from "react";

export function Terminal() {
  const [history, setHistory] = useState<
    { input: string; output: React.ReactNode }[]
  >([
    {
      input: "help",
      output: "Type 'help' to see a list of available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 mt-1 mb-2">
            <div className="text-white font-bold mb-2">Available commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-white/70">
              <div>
                <span className="text-accent font-bold">whoami</span> - Display
                profile info
              </div>
              <div>
                <span className="text-accent font-bold">skills</span> - List
                technical skills
              </div>
              <div>
                <span className="text-accent font-bold">projects</span> - View
                featured work
              </div>
              <div>
                <span className="text-accent font-bold">experience</span> - View
                work history
              </div>
              <div>
                <span className="text-accent font-bold">github</span> - Get
                GitHub link
              </div>
              <div>
                <span className="text-accent font-bold">contact</span> - Show
                contact info
              </div>
              <div>
                <span className="text-accent font-bold">clear</span> - Clear
                terminal
              </div>
            </div>
          </div>
        );
        break;
      case "whoami":
        output =
          "Mahmoud Ahmed - Junior Full Stack Developer & Data Science Student at Alexandria University.";
        break;
      case "skills":
        output = (
          <div className="space-y-2 mt-1">
            <div>
              <span className="text-green-400 font-bold">Frontend:</span> React,
              Next.js, Tailwind CSS, TypeScript
            </div>
            <div>
              <span className="text-green-400 font-bold">Backend:</span>{" "}
              Node.js, NestJS, Express.js, PostgreSQL, Drizzle
            </div>
            <div>
              <span className="text-green-400 font-bold">Tools:</span> Git,
              Docker, AWS S3, Linux
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-1 mt-1">
            <div>
              <span className="text-accent">•</span>{" "}
              <a
                href="https://graphora-visualizer.vercel.app"
                target="_blank"
                className="text-blue-400 hover:underline font-bold"
              >
                Graphora
              </a>{" "}
              - Full-stack graph visualization
            </div>
            <div>
              <span className="text-accent">•</span>{" "}
              <a
                href="https://swiftshift-scheduler.vercel.app/"
                target="_blank"
                className="text-blue-400 hover:underline font-bold"
              >
                Swift Shift
              </a>{" "}
              - Employee scheduling platform
            </div>
            <div>
              <span className="text-accent">•</span>{" "}
              <a
                href="https://ma-drive-tutorial.netlify.app/"
                target="_blank"
                className="text-blue-400 hover:underline font-bold"
              >
                MA Drive
              </a>{" "}
              - Google Drive clone
            </div>
          </div>
        );
        break;
      case "experience":
        output = (
          <div className="space-y-2 mt-1">
            <div>
              <div className="font-bold text-white">
                Software Developer (Freelance)
              </div>
              <div className="text-white/50 text-xs">
                @ Shafei Vehicle Management (2025)
              </div>
            </div>
            <div>
              <div className="font-bold text-white">.NET Web Trainee</div>
              <div className="text-white/50 text-xs">
                @ Digital Egypt Pioneers (2024)
              </div>
            </div>
          </div>
        );
        break;
      case "github":
        output = (
          <a
            href="https://github.com/ma-hmuud"
            target="_blank"
            className="text-blue-400 hover:underline font-bold"
          >
            github.com/ma-hmuud
          </a>
        );
        break;
      case "contact":
        output = (
          <a
            href="mailto:mahmoud.ahmed.25.9.24@gmail.com"
            className="text-blue-400 hover:underline font-bold"
          >
            mahmoud.ahmed.25.9.24@gmail.com
          </a>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
      case "su":
        output = (
          <span className="text-red-400">
            Nice try. You don&#39;t have root privileges on Mahmoud&#39;s
            portfolio. This incident will be reported.
          </span>
        );
        break;
      case "rm -rf /":
        output = <span className="text-red-400">Access denied.</span>;
        break;
      case "date":
        output = new Date().toString();
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput("");
  };

  return (
    <div className="backdrop-blur-xl border border-white/10 rounded-none bg-black/80 font-mono text-sm sm:text-base flex flex-col h-80 md:h-96 relative w-full overflow-hidden shadow-2xl">
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-none bg-red-500/80" />
          <div className="w-3 h-3 rounded-none bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-none bg-green-500/80" />
        </div>
        <div className="font-mono text-xs text-white/50 tracking-widest uppercase">
          mahmoud@sys:~
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-4 flex-1 overflow-y-auto space-y-3 p-4 pb-4 scroll-smooth"
      >
        {history.map((cmd, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-green-400/80">mahmoud@sys:~$</span>
              <span className="text-white">{cmd.input}</span>
            </div>
            <div className="text-white/70 pl-4 mt-1">{cmd.output}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex gap-2 mt-4 relative">
          <span className="text-green-400/80 shrink-0">mahmoud@sys:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-white/20"
            autoComplete="off"
            spellCheck="false"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}
