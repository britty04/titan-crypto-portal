import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Command {
  input: string;
  output: string;
}

export const Terminal = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [commands]);

  const handleCommand = async (input: string) => {
    setIsLoading(true);
    let response = "";

    switch (input.toLowerCase().trim()) {
      case "help":
        response = "Available commands: help, about, github, twitter, clear";
        break;
      case "about":
        response = "Mikasa AI Trading - Your gateway to the future of algorithmic trading.";
        break;
      case "github":
        window.open("https://github.com", "_blank");
        response = "Opening GitHub...";
        break;
      case "twitter":
        window.open("https://twitter.com", "_blank");
        response = "Opening Twitter...";
        break;
      case "clear":
        setCommands([]);
        setIsLoading(false);
        return;
      default:
        try {
          const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-4",
              messages: [
                {
                  role: "system",
                  content: "You are a helpful AI trading assistant. Keep responses concise and trading-focused.",
                },
                {
                  role: "user",
                  content: input,
                },
              ],
              max_tokens: 150,
            }),
          });

          const data = await aiResponse.json();
          response = data.choices[0].message.content;
        } catch (error) {
          response = "Error processing your request. Please try again.";
        }
    }

    setCommands([...commands, { input, output: response }]);
    setIsLoading(false);
    setCurrentInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/90 rounded-lg p-4 font-mono text-sm h-[400px] overflow-y-auto w-full max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="text-green-400 mb-4">
        Welcome to Mikasa AI Trading Terminal
        Type 'help' for available commands.
      </div>

      {commands.map((cmd, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center text-white">
            <span className="text-green-400">$ </span>
            <span className="ml-2">{cmd.input}</span>
          </div>
          <div className="text-gray-300 ml-4 mt-1">{cmd.output}</div>
        </div>
      ))}

      <div className="flex items-center mt-2">
        <span className="text-green-400">$ </span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && currentInput.trim()) {
              handleCommand(currentInput);
            }
          }}
          className="flex-1 ml-2 bg-transparent outline-none text-white"
          placeholder="Type a command..."
          disabled={isLoading}
        />
      </div>
      {isLoading && (
        <div className="text-green-400 ml-4 mt-2">Processing...</div>
      )}
      <div ref={terminalEndRef} />
    </motion.div>
  );
};