import { UserType } from "@/interfaces/user-interface";
import { Drawer } from "antd";
import React from "react";

const CurrentUserInfoDrawer = ({
  currentUser,
  showCurrentUserInfo,
  setShowCurrentUserInfo,
}: {
  currentUser: UserType;
  showCurrentUserInfo: boolean;
  setShowCurrentUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Drawer
        open={showCurrentUserInfo}
        onClose={() => setShowCurrentUserInfo(false)}
        title="User Info"
        placement="right"
      />
    </div>
  );
};

export default CurrentUserInfoDrawer;
