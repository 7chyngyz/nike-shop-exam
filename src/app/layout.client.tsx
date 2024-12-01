"use client";
import { FC, ReactNode,} from "react";
import ReduxProvider from "@/providers/ReduxProvider";
import Header from "@/components/layout/header/Header";

interface ILayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <Header />
      {children}
    </ReduxProvider>
  );
};

export default LayoutClient;
