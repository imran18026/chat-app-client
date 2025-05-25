"use client";
import { Dropdown, MenuProps } from "antd";
import { useState } from "react";
import NewChatModel from "./new-chat-model";

const ChatsHeader = () => {
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState<boolean>(false);
  const items: MenuProps["items"] = [
    {
      label: "New Chat",
      key: "1",
      onClick: () => {
        setIsNewChatModalOpen(true);
      },
    },
    {
      label: "New Group",
      key: "2",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <span className="text-md font-bold">Chat List</span>
        <div>
          <Dropdown.Button menu={menuProps} size="small">
            <span className="text-md font-bold cursor-not-allowed">
              Add New
            </span>
          </Dropdown.Button>
        </div>
      </div>
      <div>search</div>
      {isNewChatModalOpen && (
        <NewChatModel
          isNewChatModalOpen={isNewChatModalOpen}
          setIsNewChatModalOpen={setIsNewChatModalOpen}
        />
      )}
    </div>
  );
};

export default ChatsHeader;
