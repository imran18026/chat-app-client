/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatType } from "@/interfaces/chat-interface";
import { ChatStateType, SetSelectedChat } from "@/redux/chatSlice";
import { UserStateType } from "@/redux/userSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatCard = ({ chat }: { chat: ChatType }) => {
  const { currentUser }: UserStateType = useSelector(
    (state: any) => state.user
  );
  const { SelectedChat }: ChatStateType = useSelector(
    (state: any) => state.chat
  );
  const dispatch = useDispatch();
  let chatName = "";
  let chatImage = "";
  // const message = "";
  // const lastMessageSenderName = "";
  // const messageTime = "";
  if (chat.isGroupChat) {
    chatName = chat?.groupName ?? "";
    chatImage = chat.groupProfilePicture ?? "";
  } else {
    const recipientUser = chat.users.find(
      (user) => user._id !== currentUser?._id
    );
    chatName = recipientUser?.name ?? "";
    chatImage = recipientUser?.imageUrl ?? "";
  }
  const isSelected = chat._id === SelectedChat?._id;
  return (
    <div
      className={`flex justify-between hover:bg-gray-100 py-2 cursor-pointer rounded ${
        isSelected ? "bg-gray-100 border-gray-300 border-solid" : ""
      } `}
      onClick={() => {
        dispatch(SetSelectedChat(chat));
      }}
    >
      <div className="flex items-center gap-5">
        <Image
          src={chatImage}
          alt="chat"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm text-gray-800">{chatName}</span>
      </div>
      <div></div>
    </div>
  );
};

export default ChatCard;
