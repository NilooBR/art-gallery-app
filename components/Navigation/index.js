import Link from "next/link";
import styled from "styled-components";

const NavigationList = styled.ul`
  list-style: none;
  background: white;
  border-top: 1px solid black;
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function Navigation() {
  return (
    <>
      <NavigationList>
        <NavigationLink href={"/Spotlight"}>Spotlight</NavigationLink>
        <NavigationLink href={"/ArtPieces"}>Gallery</NavigationLink>
        <NavigationLink href={"/Favorites"}>Favorites</NavigationLink>
      </NavigationList>
    </>
  );
}
