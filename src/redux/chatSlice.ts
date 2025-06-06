import { ChatType } from "@/interfaces/chat-interface";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    Chat: [],
    SelectedChat: null,
  },
  reducers: {
    SetAllChat: (state, action) => {
      state.Chat = action.payload;
    },
    SetSelectedChat: (state, action) => {
      state.SelectedChat = action.payload;
    },
  },
});

export const { SetAllChat, SetSelectedChat } = chatSlice.actions;
export default chatSlice;

export interface ChatStateType {
  Chat: ChatType[];
  SelectedChat: ChatType | null;
}
