import { useState } from "react";
import genAI from "@/lib/genai";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    const result = await model.generateContent(input);
    const response = result.response.text();

    setMessages((prev) => [...prev, { role: "bot", content: response }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="bg-white shadow-lg rounded-xl w-80 h-96 flex flex-col border">
          <div className="flex justify-between items-center p-2 bg-blue-600 text-white rounded-t-xl">
            <span>AI Chat</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto text-sm space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span className="block px-2 py-1 rounded bg-gray-100 inline-block">{m.content}</span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 border rounded px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Frage eingeben..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-3 rounded">
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
