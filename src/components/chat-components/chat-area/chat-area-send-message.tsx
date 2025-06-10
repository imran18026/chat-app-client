import { Button } from "antd";
import React from "react";

const ChatAreaSendMessage = () => {
  return (
    <div className="flex gap-5 p-3 bg-gray-100 border-0 border-solid border-gray-200">
      <div>emoji</div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full h-[46px] border border-solid border-gray-300 focus:outline-none focus:border-gray-500 px-5"
        />
      </div>

      <Button type="primary">SEND</Button>
    </div>
  );
};

export default ChatAreaSendMessage;
