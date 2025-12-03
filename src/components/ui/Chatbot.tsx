"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "안녕하세요! 한국후지공업 챗봇입니다. 무엇을 도와드릴까요?", isBot: true },
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages([...messages, { text: input, isBot: false }]);
        setInput("");

        // Simple auto-reply simulation
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "문의가 접수되었습니다. 담당자가 곧 확인 후 연락드리겠습니다.", isBot: true },
            ]);
        }, 1000);
    };

    const handleQuickReply = (query: string) => {
        setMessages([...messages, { text: query, isBot: false }]);

        let reply = "";
        switch (query) {
            case "회사소개":
                reply = "한국후지공업은 30년 전통의 육절기 전문 기업입니다.";
                break;
            case "제품소개":
                reply = "냉장, 냉동, 민서기 등 다양한 라인업을 보유하고 있습니다.";
                break;
            case "AS문의":
                reply = "02-2246-6800으로 전화 주시면 신속히 처리해 드립니다.";
                break;
            case "중고제품":
                reply = "엄격한 QA를 거친 리퍼브 제품을 합리적인 가격에 제공합니다.";
                break;
            case "연락처":
                reply = "전화: 02-2246-6800 / 주소: 서울 동대문구 천호대로 47길 62";
                break;
            default:
                reply = "무엇을 도와드릴까요?";
        }

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: reply, isBot: true }]);
        }, 500);
    };

    return (
        <>
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neon-purple text-white rounded-full flex items-center justify-center shadow-lg hover:bg-neon-cyan hover:text-deep-black transition-colors"
            >
                {isOpen ? <X /> : <MessageCircle />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col"
                        style={{ height: "500px" }}
                    >
                        <div className="bg-deep-black text-white p-4 flex justify-between items-center">
                            <span className="font-bold">한국후지공업 챗봇</span>
                            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.isBot
                                                ? "bg-white border border-gray-200 text-gray-800"
                                                : "bg-neon-purple text-white"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["회사소개", "제품소개", "AS문의", "중고제품", "연락처"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => handleQuickReply(opt)}
                                            className="px-3 py-1.5 bg-white border border-neon-purple text-neon-purple text-xs rounded-full hover:bg-neon-purple hover:text-white transition-colors"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="메시지를 입력하세요..."
                                className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neon-purple"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2 bg-neon-purple text-white rounded-lg hover:bg-neon-cyan hover:text-deep-black transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
