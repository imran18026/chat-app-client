"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chat } from "@/models/chat-model";

export const addToChat = async (payload: any) => {
  try {
    const chat = await Chat.create(payload);
    return JSON.parse(JSON.stringify(chat));
  } catch (error) {
    return {
      error,
    };
  }
};

export const getAllChats = async (userId: string) => {
  try {
    const chats = await Chat.find({
      users: {
        $in: [userId],
      },
    }).populate("users");

    return JSON.parse(JSON.stringify(chats));
  } catch (error) {
    return {
      error,
    };
  }
};
