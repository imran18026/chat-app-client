import React from "react";
import ChatsHeader from "./chats-header";
import ChatsFriends from "./chats-friends";

const Chats = () => {
  return (
    <div className=" w-[20%] h-full p-2">
      <ChatsHeader />
      <ChatsFriends />
    </div>
  );
};

export default Chats;
