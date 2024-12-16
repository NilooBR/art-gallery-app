import ArtPiece from "@/components/ArtPiece";
import FavoriteButton from "@/components/FavoriteButton";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const StyledListItem = styled.li`
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: blue;
  }
`;

export default function ArtPieces({
  artPieces,
  onToggleFavorite,
  favoriteArt,
}) {


  return (
    <>
    <StyledList>
    <StyledHeader>Art Gallery</StyledHeader>
    {artPieces.map((artPiece) => {
        const isFavorite =
          (Array.isArray(favoriteArt) &&
            favoriteArt.find((art) => art.slug === artPiece.slug)
              ?.isFavorite) ||
          false;
        return (
          <StyledListItem key={artPiece.slug}>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={() => onToggleFavorite(artPiece.slug)}
            />
            <StyledLink href={`ArtPieces/${artPiece.slug}`}>
              <br />
              <ArtPiece
                name={artPiece.name}
                imageSource={artPiece.imageSource}
                artist={artPiece.artist}
                year={artPiece.year}
                genre={artPiece.genre}
              />
            </StyledLink>
          </StyledListItem>
        );
      })}
    </StyledList>
    <Navigation></Navigation>
    </>
  );
}
