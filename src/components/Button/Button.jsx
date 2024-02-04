import React from "react";
import { LogoutButton } from "../../layout/Sidebar.styles";
import { ButtonContainer } from "./Button.style";

export const Button = ({ text, onClick }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};
