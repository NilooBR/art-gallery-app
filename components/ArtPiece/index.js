import Image from "next/image";
import styled from "styled-components";

const StyledArtPiece = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export default function ArtPiece({
  name,
  imageSource,
  artist,
  year,
  genre,
}) {
  return (
    <>
    <StyledArtPiece>
      <Image src={imageSource} alt={`${name}`} width={200} height={200}>
      </Image>
      <h5>
        {name} <br />
        {artist}
        <br />
        {year}
        <br />
        {genre}
      </h5>
      </StyledArtPiece>
    </>
  );
}
