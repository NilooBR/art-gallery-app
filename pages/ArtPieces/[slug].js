import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPiece from "@/components/ArtPiece";
import styled from "styled-components";
import Color from "@/components/Color";
import FavoriteButton from "@/components/FavoriteButton";
import Navigation from "@/components/Navigation";

const BackButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1.5rem;
  border: none;
`;

export default function ArtPieceDetails({
  artPieces,
  favoriteArt,
  onToggleFavorite,
}) {
  const [displayedArtPiece, setDisplayedArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug && artPieces) {
      //   console.log("slug: ", slug);
      //   console.log("Art pieces: ", artPieces);
      const foundArtPiece = artPieces.find((art) => art.slug === slug);
      setDisplayedArtPiece(foundArtPiece);
    }
  }, [slug, artPieces]);

  useEffect(() => {
    console.log("favoriteArt:", favoriteArt);
    console.log("artPieces:", artPieces);
  }, [favoriteArt, artPieces]);

  if (!displayedArtPiece) {
    return <div>Loading art piece...</div>;
  }

  const isFavorite =
    (Array.isArray(favoriteArt) &&
      favoriteArt.find((art) => art.slug === displayedArtPiece.slug)
        ?.isFavorite) ||
    false;

  return (
    <>
      <BackButton type="button" onClick={() => router.back()}>
        ☜
      </BackButton>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => onToggleFavorite(displayedArtPiece.slug)}
      ></FavoriteButton>

      <br></br>

      <ArtPiece
        name={displayedArtPiece.name}
        imageSource={displayedArtPiece.imageSource}
        artist={displayedArtPiece.artist}
        year={displayedArtPiece.year}
        genre={displayedArtPiece.genre}
      ></ArtPiece>
      <Color artPieces={displayedArtPiece}></Color>
      <Navigation></Navigation>
    </>
  );
}
