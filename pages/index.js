import ArtPieces from "../pages/ArtPieces";
import Head from "next/head.js";

export default function HomePage({ artPieces, favoriteArt, onToggleFavorite }) {

  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <ArtPieces
        artPieces={artPieces}
        favoriteArt={favoriteArt}
        onToggleFavorite={onToggleFavorite}
      ></ArtPieces>
    </div>
  );
}
