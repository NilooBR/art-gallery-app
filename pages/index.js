import Navigation from "@/components/Navigation";
import Head from "next/head.js";
import Spotlight from "./Spotlight";

export default function HomePage({artPieces, favoriteArt, onToggleFavorite}) {
  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Spotlight
        artPieces={artPieces}
        favoriteArt={favoriteArt}
        onToggleFavorite={onToggleFavorite}
      ></Spotlight>
      <Navigation></Navigation>
    </div>
  );
}
