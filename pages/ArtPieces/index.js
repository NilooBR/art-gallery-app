import ArtPiece from "@/components/ArtPiece";
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

export default function ArtPieces({ artPieces }) {
  return (
    <StyledList>
      {artPieces.map((artPiece) => (
        <StyledListItem key={artPiece.id}>
          <ArtPiece
            name={artPiece.name}
            imageSource={artPiece.imageSource}
            artist={artPiece.artist}
            year={artPiece.year}
            genre={artPiece.genre}
          ></ArtPiece>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
