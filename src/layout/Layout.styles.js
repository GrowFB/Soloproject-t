import styled from "styled-components";
import { css } from "styled-components";

export const LayoutContainer = styled.div`
  height: 100%;
  display: flex;

  ${({ isLoggedIn }) =>
    !isLoggedIn &&
    css`
      filter: blur(2px);
    `}
`;
