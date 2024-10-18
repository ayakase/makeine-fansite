import Overlay from "../../components/Particles/OverlayAnimation";
import { useState } from "react";
import { ChatInput } from "../../components/ChatInput";
import { BackgroundLines } from "../../components/Particles/BackgroundLine";
export function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };
  // const sendMessage = () => {
  //   
  // };

  return (
    <>
      <Overlay name="lemon" />
      <BackgroundLines>
        <div className="flex flex-col items-center justify-center absolute inset-0 p-4 z-40">
          <div className="w-full flex flex-col h-[70vh] bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white text-center font-semibold">
              Chatbox
            </div>

            {/* Chat messages section */}
            <div className="flex-1 p-4 overflow-y-auto space-y-1">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-end space-x-2"
                  >
                    <div className="bg-indigo-100 text-indigo-900 p-2 rounded-lg w-full">
                      {message}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">No messages yet</div>
              )}
            </div>

            {/* Input and send button */}
            <div className="p-4 flex items-center space-x-4">
              <ChatInput
                onChange={(e) => setInputValue(e.target.value)}
                onSubmit={onSubmit}
              ></ChatInput>
            </div>
          </div>
        </div>
      </BackgroundLines>

    </>
  );
}
