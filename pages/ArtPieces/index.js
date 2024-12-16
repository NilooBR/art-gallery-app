import ArtPiece from "@/components/ArtPiece";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

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
    <StyledList>
      {artPieces.map((artPiece) => {
        const isFavorite = favoriteArt.some(
          (art) => art.slug === artPiece.slug
        );
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
  );
}
