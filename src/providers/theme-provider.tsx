import { ConfigProvider } from "antd";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#31304D",
          borderRadius: 2,
        },
        components: {
          Button: {
            colorPrimary: "#31304D",
            controlHeight: 48,
            boxShadow: "none",
            controlOutline: "none",
            colorPrimaryHover: "#31304D",
            colorBorder: "#31304D",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
