import React from "react";

import Header from "@/components/layout-components/Header";
import Content from "@/components/layout-components/Content";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default LayoutProvider;
