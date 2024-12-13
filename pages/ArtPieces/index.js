import ArtPiece from "@/components/ArtPiece";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 1rem;
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
