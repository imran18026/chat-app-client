"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChatStateType } from "@/redux/chatSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import noChatSelectedLogo from "../../../../public/no-chat-selected-logo.png";
import ChatAreaHeader from "./chat-area-header";
import ChatAreaSendMessage from "./chat-area-send-message";
import ChatAreaSelectedMessage from "./chat-area-selected-message";

const ChatArea = () => {
  const { SelectedChat }: ChatStateType = useSelector(
    (state: any) => state.chat
  );
  return (
    <div className=" flex-1 h-full">
      {!SelectedChat && (
        <div className=" flex flex-col justify-center items-center h-full">
          <Image
            src={noChatSelectedLogo}
            alt="No Chat Selected"
            width={200}
            height={200}
          ></Image>
          <h1 className=" text-2xl font-semibold text-gray-700 uppercase">
            Please Select a Chat to start conversation...
          </h1>
        </div>
      )}
      {SelectedChat && (
        <div className=" flex flex-col h-full justify-between ">
          <ChatAreaHeader />
          <ChatAreaSelectedMessage />
          <ChatAreaSendMessage />
        </div>
      )}
    </div>
  );
};

export default ChatArea;
