"use client";
import { useState } from "react";

// Define the shape of our chat messages
interface Message {
  role: "user" | "ai";
  content: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state to track API status

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    // Add user input to message history
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true); // Start loading state

    try {
      // Call our internal API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.text) {
        // Append AI response to chat
        setMessages(prev => [...prev, { role: "ai" as const, content: data.text }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "ai" as const, content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false); // Stop loading state regardless of success or failure
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto border rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="bg-blue-600 p-4 text-white font-bold text-center">
        AI Project Assistant
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
              msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-gray-800 border rounded-tl-none"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start italic text-gray-400 text-sm animate-pulse">
            AI is thinking...
          </div>
        )}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            disabled={isLoading} // Disable input while waiting for response
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={isLoading ? "Please wait..." : "Ask me anything..."}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 disabled:bg-gray-100"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;