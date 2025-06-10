/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatStateType } from "@/redux/chatSlice";
import { UserStateType } from "@/redux/userSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const ChatAreaHeader = () => {
  const { currentUser }: UserStateType = useSelector(
    (state: any) => state.user
  );
  const { SelectedChat }: ChatStateType = useSelector(
    (state: any) => state.chat
  );
  let chatName = "";
  let chatImage = "";
  // const message = "";
  // const lastMessageSenderName = "";
  // const messageTime = "";
  if (SelectedChat) {
    if (SelectedChat.isGroupChat) {
      chatName = SelectedChat?.groupName ?? "";
      chatImage = SelectedChat.groupProfilePicture ?? "";
    } else {
      const recipientUser = SelectedChat.users.find(
        (user) => user._id !== currentUser?._id
      );
      chatName = recipientUser?.name ?? "";
      chatImage = recipientUser?.imageUrl ?? "";
    }
  }
  return (
    <div className="flex justify-between py-3 px-5 border-0 border-b border-solid border-gray-200 bg-gray-400/4">
      <div className="flex items-center gap-5">
        <Image
          className="rounded-full"
          src={chatImage}
          alt={`${chatName}-image`}
          width={30}
          height={30}
        ></Image>
        <span className="text-sm font-semibold text-gray-700">{chatName}</span>
      </div>
    </div>
  );
};

export default ChatAreaHeader;
