import Navigation from "@/components/Navigation";
import ArtPieces from "../ArtPieces";

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
      <h1>Art Gallery</h1>
      <h2>Favorites</h2>
      <ArtPieces
        artPieces={favorites}
        favoriteArt={favoriteArt}
        onToggleFavorite={onToggleFavorite}
      ></ArtPieces>
      <Navigation></Navigation>
    </>
  );
}
