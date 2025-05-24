"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Drawer, message, Upload } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SetCurrentUser, UserStateType } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fileUploadToCloudinary } from "@/helpers/cloudinary-helper";
import { updateUserProfilePicture } from "@/server-actions/users";
import { UserType } from "@/interfaces/user-interface";
import { showToast } from "nextjs-toast-notify";

const CurrentUserInfoDrawer = ({
  showCurrentUserInfo,
  setShowCurrentUserInfo,
}: {
  showCurrentUserInfo: boolean;
  setShowCurrentUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const { currentUser }: UserStateType = useSelector(
    (state: any) => state.user
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { signOut } = useClerk();
  const onLogout = async () => {
    try {
      await signOut();
      setShowCurrentUserInfo(false);
      setLoading(true);
      showToast.success("Logged out successfully", {
        duration: 2000,
        progress: true,
        position: "top-center",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      router.push("/sign-in");
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onProfilePictureChange = async () => {
    try {
      setLoading(true);
      if (!selectedFile) return;

      const imageUrl: string = await fileUploadToCloudinary(selectedFile);
      const updatedUser: UserType = await updateUserProfilePicture(
        currentUser?._id as string,
        imageUrl as string
      );

      dispatch(SetCurrentUser(updatedUser as UserType));
      showToast.success("Profile picture updated successfully", {
        duration: 2000,
        progress: true,
        position: "top-center",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      setShowCurrentUserInfo(false);
      setSelectedFile(null);
    } catch (error: any) {
      message.error(error);
    } finally {
      setLoading(false);
      setShowCurrentUserInfo(false);
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
            {!selectedFile && (
              <Image
                src={currentUser?.imageUrl}
                alt="user image"
                width={120}
                height={120}
                className=" rounded-full"
              />
            )}
            <Upload
              maxCount={1}
              beforeUpload={(file) => {
                setSelectedFile(file);
                return false;
              }}
              listType={selectedFile ? "picture-circle" : "text"}
              onRemove={() => {
                setSelectedFile(null);
              }}
              showUploadList={{
                showPreviewIcon: false,
              }}
              className="cursor-pointer"
            >
              Change Profile Picture
            </Upload>
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

          <div className="flex flex-col gap-2">
            <Button
              className="w-full"
              loading={loading}
              onClick={onProfilePictureChange}
              block
              disabled={!selectedFile}
            >
              Change Profile Picture
            </Button>
            <Button
              className="w-full"
              loading={loading && !selectedFile}
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
