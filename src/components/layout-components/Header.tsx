"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { Avatar, message } from "antd";
import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { UserType } from "@/interfaces/user-interface";
import CurrentUserInfoDrawer from "./CurrentUserInfoDrawer";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser, UserStateType } from "@/redux/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { currentUser }: UserStateType = useSelector(
    (state: any) => state.user
  );

  const [showCurrentUserInfo, setShowCurrentUserInfo] =
    useState<boolean>(false);

  const getCurrentUser = async () => {
    try {
      const userData = await getCurrentUserFromMongoDB();
      if (userData.error) throw new Error(userData.error);
      dispatch(SetCurrentUser(userData as UserType));
    } catch (error: any) {
      message.error(error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  const pathname = usePathname();
  const idPublicRoutes =
    pathname.includes("sign-in") || pathname.includes("sign-up");
  if (idPublicRoutes) return null;

  return (
    <div className=" py-5 px-3 bg-gray-200 w-full flex justify-between items-center border-b border-solid border-gray-300 ">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="chat app logo" width={30} height={30} />
        <h1 className="text-2xl font-bold text-[#31304D] uppercase">
          Chat App
        </h1>
      </div>

      {!showCurrentUserInfo && (
        <div className="flex items-center gap-5">
          <span className="text-sm">{currentUser?.name}</span>
          <Avatar
            className="cursor-pointer"
            src={currentUser?.imageUrl}
            onClick={() => setShowCurrentUserInfo(true)}
          />
        </div>
      )}
      {showCurrentUserInfo && (
        <CurrentUserInfoDrawer
          showCurrentUserInfo={showCurrentUserInfo}
          setShowCurrentUserInfo={setShowCurrentUserInfo}
        />
      )}
    </div>
  );
};

export default Header;
