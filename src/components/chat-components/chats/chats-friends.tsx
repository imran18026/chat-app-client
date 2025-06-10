/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChatType } from "@/interfaces/chat-interface";
import { UserType } from "@/interfaces/user-interface";
import { ChatStateType, SetAllChat } from "@/redux/chatSlice";
import { getAllChats } from "@/server-actions/chats";
import { message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatCard from "./chat-card";

const ChatsFriends = () => {
  const dispatch = useDispatch();
  const { Chat }: ChatStateType = useSelector((state: any) => state.chat);

  const [loading, setLoading] = useState<boolean>(false);
  const currentUser: UserType | null = useSelector(
    (state: any) => state.user.currentUser
  );

  const getAllChat = async () => {
    try {
      setLoading(true);
      const response = await getAllChats(currentUser?._id as string);
      if (response.error) throw new Error(response.error);
      dispatch(SetAllChat(response as ChatType[]));
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) getAllChat();
  }, [currentUser]);

  return (
    <div className=" w-full flex flex-col gap-5 mt-5 ">
      {Chat.length > 0 && (
        <div className=" flex flex-col gap-5 ">
          {Chat?.map((chat: ChatType) => {
            return <ChatCard key={chat._id} chat={chat} />;
          })}
        </div>
      )}

      {loading && (
        <div className=" flex items-center justify-center mt-32">
          <div className=" flex flex-col items-center">
            <Spin />
            <span className=" text-sm text-gray-500 my-5">
              Chats Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatsFriends;
