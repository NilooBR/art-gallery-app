import ArtPiece from "@/components/ArtPiece";
import FavoriteButton from "@/components/FavoriteButton";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
const StyledPageTitle = styled.h2`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export default function Spotlight({
  artPieces,
  favoriteArt,
  onToggleFavorite,
}) {
  const [spotlight, setSpotlight] = useState(null);

  useEffect(() => {
    setSpotlight(artPieces[Math.floor(Math.random() * artPieces.length)]);
  }, [artPieces]);

  if (!spotlight) {
    return <div>Loading Spotlight...</div>;
  }

  const isFavorite =
    Array.isArray(favoriteArt) &&
    favoriteArt.find((art) => art.slug === spotlight.slug)?.isFavorite || false;

  return (
    <>
      <StyledHeader>Art Gallery</StyledHeader>

      <StyledPageTitle>Spotlight</StyledPageTitle>

      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(spotlight.slug)}
      ></FavoriteButton>

      <br></br>

      <ArtPiece
        name={spotlight.name}
        imageSource={spotlight.imageSource}
        artist={spotlight.artist}
        year={spotlight.year}
        genre={spotlight.genre}
      ></ArtPiece>
      <Navigation></Navigation>
    </>
  );
}