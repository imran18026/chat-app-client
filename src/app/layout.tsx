import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutProvider from "@/providers/layout-provider";
import ReduxProvider from "@/providers/redux-provider";

const oswald = Oswald({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "A realtime chat app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${oswald.variable} antialiased`}>
          <ThemeProvider>
            <ReduxProvider>
              <LayoutProvider>{children}</LayoutProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
