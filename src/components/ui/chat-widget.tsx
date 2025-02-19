"use client";

export default function ChatAssistant() {
    return (
        <div className="fixed bottom-4 right-4 bg-gray-700 text-white p-4 rounded-lg">
            <h3>AI Chat Assistant</h3>
            <input type="text" placeholder="Ask AI something..." className="w-full p-2 mt-2 bg-gray-800 text-white" />
            <button className="mt-2 p-2 bg-blue-500 text-white">Send</button>
        </div>
    );
}
