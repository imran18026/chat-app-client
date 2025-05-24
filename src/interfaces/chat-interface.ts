/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageType } from "./message-interface";
import { UserType } from "./user-interface";

export interface ChatType {
  _id: string;
  users: UserType[];
  createdBy: UserType;
  latestMessage: MessageType;
  isGroupChat: boolean;
  groupName?: string;
  groupProfilePicture?: string;
  groupBio?: string;
  groupAdmin?: UserType[];
  unreadCounts: any;
  createdAt: string;
  updatedAt: string;
}
