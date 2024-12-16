import Navigation from "@/components/Navigation";
import ArtPieces from "../ArtPieces";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledPageTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`


export default function Favorites({
  artPieces,
  favoriteArt,
  onToggleFavorite,
}) {
  const favorites = artPieces.filter((art) =>
    favoriteArt.find((pieces) => pieces.slug === art.slug && pieces.isFavorite)
  );
  return (
    <>
      <StyledHeader>Art Gallery</StyledHeader>
      <StyledPageTitle>Favorites</StyledPageTitle>
      <ArtPieces
        artPieces={favorites}
        favoriteArt={favoriteArt}
        onToggleFavorite={onToggleFavorite}
      ></ArtPieces>
      <Navigation></Navigation>
    </>
  );
}
