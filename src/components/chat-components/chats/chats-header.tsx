"use client";
import { Dropdown, MenuProps } from "antd";
import React, { useState } from "react";
import NewFriendModal from "./new-friend-modal";

const ChatsHeader = () => {
  const [isNewFriendModalOpen, setIsNewFriendModalOpen] =
    useState<boolean>(false);
  const items: MenuProps["items"] = [
    {
      label: "New Friend",
      key: "1",
      onClick: () => {
        setIsNewFriendModalOpen(true);
      },
    },
    {
      label: "New Group",
      key: "2",
    },
  ];

  return (
    <div className=" w-full">
      <div className=" flex justify-between items-center ">
        <span className=" text-md font-bold">Chat List</span>
        <div>
          <Dropdown.Button size="small" menu={{ items }}>
            <span className="text-md font-bold cursor-not-allowed ">
              Add New
            </span>
          </Dropdown.Button>
        </div>
      </div>
      <div className=" my-2">
        <p className=" text-sm text-center">Search.....</p>
      </div>
      {isNewFriendModalOpen && (
        <NewFriendModal
          isNewFriendModalOpen={isNewFriendModalOpen}
          setIsNewFriendModalOpen={setIsNewFriendModalOpen}
        />
      )}
    </div>
  );
};

export default ChatsHeader;
