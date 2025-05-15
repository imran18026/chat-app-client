"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "@/interfaces/user-interface";
import { Button, Divider, Drawer, message } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CurrentUserInfoDrawer = ({
  currentUser,
  showCurrentUserInfo,
  setShowCurrentUserInfo,
}: {
  currentUser: UserType | null;
  showCurrentUserInfo: boolean;
  setShowCurrentUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { signOut } = useClerk();
  const onLogout = async () => {
    try {
      await signOut();
      setShowCurrentUserInfo(false);
      setLoading(true);
      message.success("Successfully logged out");
      router.push("/sign-in");
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProperty = (key: string, value: string) => {
    return (
      <div className="flex justify-between gap-2 my-2 ">
        <span className=" text-gray-900 text-bold">{key}</span>
        <span className="text-md text-gray-600">{value}</span>
      </div>
    );
  };

  return (
    currentUser && (
      <Drawer
        open={showCurrentUserInfo}
        onClose={() => setShowCurrentUserInfo(false)}
        title="User Info"
        placement="right"
      >
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-center gap-5 justify-center">
            <Image
              src={currentUser?.imageUrl}
              alt="user image"
              width={120}
              height={120}
              className=" rounded-full"
            />
            <span className="text-sm text-gray-700 cursor-pointer">
              Change Profile Picture
            </span>
          </div>

          <Divider className=" border-gray-700 p-1 my-1  " />

          <div>
            {getProperty("Name", currentUser?.name || "")}
            {getProperty("Username", currentUser?.userName || "")}
            {getProperty("ID", currentUser?._id || "")}
            {getProperty(
              "Join On",
              dayjs(currentUser?.createdAt).format("DD-MM-YYYY hh:mm A") || ""
            )}
          </div>

          <Divider className=" border-gray-700 p-1 my-1  " />

          <div>
            <Button
              className="w-full"
              loading={loading}
              onClick={onLogout}
              block
            >
              Logout
            </Button>
          </div>
        </div>
      </Drawer>
    )
  );
};

export default CurrentUserInfoDrawer;
