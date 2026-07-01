"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

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
  const [cursorPos, setCursorPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
            <div className="text-[#e0def4] font-bold mb-2">
              Available commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[#908caa]">
              <div>
                <span className="text-[#c4a7e7] font-bold">whoami</span> -
                Display profile info
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">skills</span> - List
                technical skills
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">projects</span> -
                View featured work
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">experience</span> -
                View work history
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">github</span> - Get
                GitHub link
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">contact</span> - Show
                contact info
              </div>
              <div>
                <span className="text-[#c4a7e7] font-bold">clear</span> - Clear
                terminal
              </div>
            </div>
          </div>
        );
        break;
      case "whoami":
        output =
          "Mahmoud Ahmed - Junior Full Stack Developer & BSc in Data Science.";
        break;
      case "skills":
        output = (
          <div className="space-y-2 mt-1">
            <div>
              <span className="text-[#31748f] font-bold">Frontend:</span> React,
              Next.js, Tailwind CSS, TypeScript
            </div>
            <div>
              <span className="text-[#31748f] font-bold">Backend:</span>{" "}
              Node.js, NestJS, Express.js, PostgreSQL, Drizzle
            </div>
            <div>
              <span className="text-[#31748f] font-bold">Tools:</span> Git,
              Docker, AWS S3, Linux
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-1 mt-1">
            <div>
              <span className="text-[#ebbcba]">•</span>{" "}
              <a
                href="https://graphora-visualizer.vercel.app"
                target="_blank"
                className="text-[#9ccfd8] hover:underline font-bold"
              >
                Graphora
              </a>{" "}
              - Full-stack graph visualization
            </div>
            <div>
              <span className="text-[#ebbcba]">•</span>{" "}
              <a
                href="https://swiftshift-scheduler.vercel.app/"
                target="_blank"
                className="text-[#9ccfd8] hover:underline font-bold"
              >
                Swift Shift
              </a>{" "}
              - Employee scheduling platform
            </div>
            <div>
              <span className="text-[#ebbcba]">•</span>{" "}
              <a
                href="https://ma-drive-tutorial.netlify.app/"
                target="_blank"
                className="text-[#9ccfd8] hover:underline font-bold"
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
              <div className="font-bold text-[#e0def4]">
                Software Developer (Freelance)
              </div>
              <div className="text-[#908caa] text-xs">
                @ Shafei Vehicle Management (2025)
              </div>
            </div>
            <div>
              <div className="font-bold text-[#e0def4]">.NET Web Trainee</div>
              <div className="text-[#908caa] text-xs">
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
            className="text-[#9ccfd8] hover:underline font-bold"
          >
            github.com/ma-hmuud
          </a>
        );
        break;
      case "contact":
        output = (
          <a
            href="mailto:mahmoud.ahmed.25.9.24@gmail.com"
            className="text-[#9ccfd8] hover:underline font-bold"
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
          <span className="text-[#eb6f92]">
            Nice try. You don&#39;t have root privileges on Mahmoud&#39;s
            portfolio. This incident will be reported.
          </span>
        );
        break;
      case "rm -rf /":
        output = <span className="text-[#eb6f92]">Access denied.</span>;
        break;
      case "date":
        output = new Date().toString();
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput("");
    setCursorPos(0);
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    setCursorPos(e.currentTarget.selectionStart || 0);
  };

  return (
    <div className="backdrop-blur-xl border border-[#44415a] rounded-none bg-[#191724] font-mono text-sm sm:text-base flex flex-col h-80 md:h-[400px] relative w-full overflow-hidden shadow-2xl">
      <div className="flex items-center px-4 py-3 bg-[#1f1d2e] border-b border-[#44415a]">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-none bg-[#eb6f92]" />
          <div className="w-3 h-3 rounded-none bg-[#f6c177]" />
          <div className="w-3 h-3 rounded-none bg-[#9ccfd8]" />
        </div>
        <div className="font-mono text-xs text-[#908caa] tracking-widest uppercase">
          mahmoud@sys:~
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-4 flex-1 overflow-y-auto space-y-3 p-4 pb-4 scroll-smooth text-[#e0def4]"
      >
        {history.map((cmd, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-[#ebbcba]">mahmoud@sys:~$</span>
              <span className="text-[#e0def4]">{cmd.input}</span>
            </div>
            <div className="text-[#908caa] pl-4 mt-1">{cmd.output}</div>
          </div>
        ))}

        <form
          onSubmit={handleCommand}
          className="flex gap-2 mt-4 relative cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <span className="text-[#ebbcba] shrink-0">mahmoud@sys:~$</span>
          <div className="relative flex-1 flex items-center h-6">
            <span className="text-[#e0def4] whitespace-pre">
              {input.slice(0, cursorPos)}
            </span>
            <motion.span
              layout
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                layout: { type: "tween", duration: 0.1, ease: "easeOut" },
              }}
              className="inline-block w-2.5 h-[1.1rem] bg-[#ebbcba] shrink-0 relative top-px"
            />
            <span className="text-[#e0def4] whitespace-pre">
              {input.slice(cursorPos)}
            </span>

            {!input && (
              <span className="text-[#908caa] absolute left-0 pointer-events-none">
                Type a command...
              </span>
            )}

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart || 0);
              }}
              onSelect={handleSelect}
              onKeyUp={handleSelect}
              onMouseUp={handleSelect}
              className="absolute inset-0 opacity-0 cursor-text w-full"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
}
