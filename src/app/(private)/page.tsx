import ChatArea from "@/components/chat-components/chat-area/chat-area";
import Chats from "@/components/chat-components/chats/chats";
import { Divider } from "antd";

export default async function Home() {
  return (
    <div className="flex h-[85vh]">
      <Chats />
      <Divider
        type="vertical"
        style={{ height: "100%", margin: "10px 0px", padding: "0px" }}
        className="border-1 border-[#31304D] "
      />
      <ChatArea />
    </div>
  );
}
