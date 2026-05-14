import { useState } from "react";
import { CHATBOT_SUGGESTIONS } from "../data/siteData";
import { getChatbotResponse } from "../utils/chatbot";
import { navigateTo } from "../utils/navigation";

export default function Chatbot({ setCurrentPage }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi, I can help with pomelo, farm location, future enquiries, and FAQs." },
  ]);

  const send = (text) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((items) => [
      ...items,
      { id: Date.now(), sender: "user", text: clean },
      { id: Date.now() + 1, sender: "bot", text: getChatbotResponse(clean) },
    ]);
    setInput("");
  };

  return (
    <>
      {open && (
        <section className="chatbot-panel" aria-label="WAsian Green chatbot">
          <div className="chatbot-header">
            <div><h3>Ask WAsian Green</h3><p>Prototype assistant</p></div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chatbot">×</button>
          </div>
          <div className="chatbot-body">
            {messages.map((message) => <div key={message.id} className={`chat-message ${message.sender}`}>{message.text}</div>)}
            <div className="chat-suggestions">
              {CHATBOT_SUGGESTIONS.map((suggestion) => (
                <button className="chat-suggestion" key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>
              ))}
              <button className="chat-suggestion" onClick={() => { setOpen(false); navigateTo(setCurrentPage, "contact"); }}>Go to Contact</button>
            </div>
          </div>
          <form className="chatbot-form" onSubmit={(event) => { event.preventDefault(); send(input); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your question..." />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
      <button className="chatbot-launcher" onClick={() => setOpen(!open)}>💬 Ask WAsian Green</button>
    </>
  );
}
