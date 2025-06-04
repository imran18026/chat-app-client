import { ChatType } from "@/interfaces/chat-interface";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    Chat: [],
  },
  reducers: {
    SetAllChat: (state, action) => {
      state.Chat = action.payload;
    },
  },
});

export const { SetAllChat } = chatSlice.actions;
export default chatSlice;

export interface ChatStateType {
  Chat: ChatType[];
}
