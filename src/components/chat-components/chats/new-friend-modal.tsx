/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { UserType } from "@/interfaces/user-interface";
import { addToChat } from "@/server-actions/chats";
import { getAllUsers } from "@/server-actions/users";
import { Button, Divider, message, Modal, Spin } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NewFriendModal = ({
  isNewFriendModalOpen,
  setIsNewFriendModalOpen,
}: {
  isNewFriendModalOpen: boolean;
  setIsNewFriendModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [users, setUsers] = useState<UserType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const currentUserData: UserType | null = useSelector(
    (state: any) => state.user.currentUser
  );

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      if (response.error) throw new Error(response.error);
      setUsers(response);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onHandleAddToChat = async (userId: string) => {
    try {
      setLoading(true);
      setSelectedUserId(userId);
      const response = await addToChat({
        users: [currentUserData?._id, userId],
        createdBy: currentUserData?._id,
      });
      if (response.error) throw new Error(response.error);
      setIsNewFriendModalOpen(false);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Modal
      open={isNewFriendModalOpen}
      onCancel={() => setIsNewFriendModalOpen(false)}
      footer={null}
      title={null}
      style={{ padding: 0, margin: 0 }}
      centered
    >
      <div>
        <h1 className=" text-md font-bold uppercase">All Available Users</h1>
      </div>

      {loading && !selectedUserId && (
        <div className=" flex items-center justify-center my-20 ">
          <Spin />
        </div>
      )}

      {!loading && users && users?.length === 0 && <div>No users found</div>}

      {!loading && users && users?.length > 0 && (
        <div className="flex flex-col gap-2">
          {users?.map((user) => {
            if (user._id === currentUserData?._id) return null;
            return (
              <>
                <div
                  key={user._id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={user.imageUrl}
                      alt="avatar"
                      width={40}
                      height={40}
                      className=" rounded-full "
                    />
                    <span className=" text-sm font-bold uppercase text-gray-500">
                      {user.name}
                    </span>
                  </div>
                  <div>
                    <Button
                      size="small"
                      loading={selectedUserId === user._id && loading}
                      onClick={() => onHandleAddToChat(user._id)}
                    >
                      Add To Chat
                    </Button>
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
              </>
            );
          })}
        </div>
      )}
    </Modal>
  );
};

export default NewFriendModal;
