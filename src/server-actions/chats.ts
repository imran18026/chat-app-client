"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chat } from "@/models/chat-model";

export const addToChat = async (payload: any) => {
  try {
    await Chat.create(payload);
    const chats = await Chat.find({
      users: {
        $in: [payload.createdBy],
      },
    })
      .populate("users")
      .sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(chats));
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
    })
      .populate("users")
      .sort({ createdAt: -1 });

    return JSON.parse(JSON.stringify(chats));
  } catch (error) {
    return {
      error,
    };
  }
};
