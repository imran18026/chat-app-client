import { ChatType } from "./chat-interface";
import { UserType } from "./user-interface";

export interface MessageType {
  _id: string;
  chat: ChatType;
  sender: UserType;
  text?: string;
  image?: string;
  readBy: UserType[];
  createdAt: string;
  updatedAt: string;
}
