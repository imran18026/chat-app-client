"use client";
import { ChatType } from "@/interfaces/chat-interface";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "@/interfaces/user-interface";
import { SetAllChat } from "@/redux/chatSlice";
import { getAllChats } from "@/server-actions/chats";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatsFriends = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const currentUserData: UserType | null = useSelector(
    (state: any) => state.user.currentUser
  );

  const getAllChat = async () => {
    try {
      setLoading(true);
      const response = await getAllChats(currentUserData?._id as string);
      if (response.error) throw new Error(response.error);
      dispatch(SetAllChat(response as ChatType[]));
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllChat();
  }, [currentUserData]);

  return (
    <div className=" w-full">
      <h1>Chats Friends</h1>
    </div>
  );
};

export default ChatsFriends;
