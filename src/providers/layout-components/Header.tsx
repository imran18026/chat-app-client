import React from "react";

const Header = () => {
  return (
    <div className=" p-5 bg-gray-200 w-full flex justify-between items-center border-b border-solid border-gray-300 ">
      <div>
        <h1>Chat App</h1>
      </div>
      <div>
        <span>User Info</span>
      </div>
    </div>
  );
};

export default Header;
