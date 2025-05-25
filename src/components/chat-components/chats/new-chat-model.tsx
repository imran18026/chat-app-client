import { Modal } from "antd";
import React from "react";

const NewChatModel = ({
  isNewChatModalOpen,
  setIsNewChatModalOpen,
}: {
  isNewChatModalOpen: boolean;
  setIsNewChatModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Modal
        open={isNewChatModalOpen}
        onCancel={() => setIsNewChatModalOpen(false)}
        footer={null}
        centered
        title={null}
        style={{ padding: 0, margin: 0 }}
      >
        <h1 className="text-md font-bold uppercase">All Available Members</h1>
      </Modal>
    </div>
  );
};

export default NewChatModel;
