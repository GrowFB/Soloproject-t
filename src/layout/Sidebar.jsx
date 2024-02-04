import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
  LogoutButton,
  Topsection,
} from "./Sidebar.styles";
import { Button } from "../components/Button/Button";
import { useAppDispatch } from "../redux/store/store";
import { setLogout } from "../redux/reducers/loginSlice";
import { ImCalendar, ImBook, ImHome } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import "../App.css";

const Menus = [
  { title: "Main", path: "/admin/main", icon: <ImHome /> },
  { title: "Travel", path: "/admin/travel", icon: <ImCalendar /> },
  { title: "Storage", path: "/admin/Storage", icon: <ImBook /> },
];

export const Sidebar = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <SidebarContainer>
      <SidebarList>
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <Topsection>
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "180px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </Topsection>

          {Menus.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.title}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
        <LogoutButton>
          <Button text="Logout" onClick={handleLogout} />
        </LogoutButton>
      </SidebarList>
    </SidebarContainer>
  );
};
