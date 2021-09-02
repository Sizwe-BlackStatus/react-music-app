import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: 560px) {
    display: block;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background: rgb(15 17 28);
    top: ${({ open }) => (open ? "54px" : "-110%")};
    overflow-y: auto;
  }
`;

export const MobileLibraryHeader = styled.div`
  display: none;
  @media screen and (max-width: 560px) {
    display: flex;
    position: relative;
    width: 196px;
    left: 20px;
    margin-top: 37px;
  }
`;

export const MobileHeaderText = styled.h1`
  position: relative;
  left: 14px;
  color: #f3f3f3;
  width: 163px;
  height: 26px;
  font-size: 27px;
  opacity: 0.5;
`;

export const MobileNavLinks = styled.ul`
display: flex;
flex-direction: column;
position: relative;
top: 20px;
width: 78%;
margin-left: 32px;
list-style-type: none;
cursor: pointer;

`
export const MobileNavItem = styled.li`
  font-size: 15px;
  height: 32px;
  margin-bottom: 2px;
  padding: 4px;
  text-align: left;
  line-height: 22px;
  a:link {
    display: flex;
    text-decoration: none;
    color: black;
  }
  a:hover {
    background: #141725;
    height: 33px;
    border-radius: 3px;
    border: 1px solid #2c2c2c;
  }
`;
