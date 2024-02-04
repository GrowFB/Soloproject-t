import React from "react";
import { LayoutContainer } from "./Layout.styles";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store/store";
import Template from "../components/pages/Template";

export default function Layout() {
  const selector = useAppSelector((state) => state.login);
  const { isLoggedIn } = selector;
  return (
    <LayoutContainer isLoggedIn={isLoggedIn}>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
}
