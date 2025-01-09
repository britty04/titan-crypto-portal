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
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("openai_api_key") || "");
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
        response = "Available commands: help, about, github, documentation, twitter, clear, set-api-key";
        break;
      case "about":
        response = "MikasaAI - Your gateway to the future of coding.";
        break;
      case "github":
        window.open("https://github.com", "_blank");
        response = "Opening GitHub...";
        break;
      case "documentation":
        window.open("https://sample.com", "_blank");
        response = "Opening documentation...";
        break;
      case "twitter":
        window.open("https://twitter.com", "_blank");
        response = "Opening Twitter...";
        break;
      case "clear":
        setCommands([]);
        setIsLoading(false);
        return;
      case "set-api-key":
        const key = prompt("Please enter your OpenAI API key:");
        if (key) {
          localStorage.setItem("openai_api_key", key);
          setApiKey(key);
          response = "API key has been set successfully.";
        } else {
          response = "API key setting was cancelled.";
        }
        break;
      default:
        if (!apiKey) {
          response = "Please set your OpenAI API key first using the 'set-api-key' command.";
          break;
        }
        try {
          const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4",
              messages: [
                {
                  role: "system",
                  content: "You are a helpful coding assistant. Keep responses concise and coding-focused.",
                },
                {
                  role: "user",
                  content: input,
                },
              ],
              max_tokens: 150,
            }),
          });

          if (!aiResponse.ok) {
            throw new Error("API request failed");
          }

          const data = await aiResponse.json();
          response = data.choices[0].message.content;
        } catch (error) {
          response = "Error processing your request. Please check your API key and try again.";
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
      className="bg-black/80 rounded-lg p-6 font-mono text-sm h-[400px] overflow-y-auto w-full max-w-3xl mx-auto backdrop-blur-sm border border-mikasa-red/30"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="text-cyan-400 mb-4">
        {'>'} $MikasaAI is now online.
        {'\n'}Type 'help' for available commands.
      </div>

      {commands.map((cmd, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center text-white">
            <span className="text-cyan-400">{'>'}</span>
            <span className="ml-2">{cmd.input}</span>
          </div>
          <div className="text-gray-300 ml-4 mt-1">{cmd.output}</div>
        </div>
      ))}

      <div className="flex items-center mt-2">
        <span className="text-cyan-400">{'>'}</span>
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
        <div className="text-cyan-400 ml-4 mt-2">Processing...</div>
      )}
      <div ref={terminalEndRef} />
    </motion.div>
  );
};