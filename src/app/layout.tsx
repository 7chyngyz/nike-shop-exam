"use client";
import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import LayoutClient from "./layout.client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <LayoutClient>{children}</LayoutClient>
        </Provider>
      </body>
    </html>
  );
}
