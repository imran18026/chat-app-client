import React from "react";
import ChatsHeader from "./chats-header";
import ChatsList from "./chats-list";

const Chats = () => {
  return (
    <div className="w-[20%] h-full p-2">
      <ChatsHeader />
      <ChatsList />
    </div>
  );
};

export default Chats;
