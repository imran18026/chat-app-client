import { Modal } from "antd";
import React from "react";

const NewFriendModal = ({
  isNewFriendModalOpen,
  setIsNewFriendModalOpen,
}: {
  isNewFriendModalOpen: boolean;
  setIsNewFriendModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
    </Modal>
  );
};

export default NewFriendModal;
