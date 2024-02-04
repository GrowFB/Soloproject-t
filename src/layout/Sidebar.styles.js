import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
`;

export const SidebarList = styled.ul``;

export const SidebarListItem = styled.li`
  background-color: ${(props) => {
    return props.isActive ? "#e0e0e0" : "#f5f5f5";
  }};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const LogoutButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 100px;
`;

export const Topsection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`;
