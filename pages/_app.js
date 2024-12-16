import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorage from "use-local-storage";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [favoriteArt, setFavoriteArt] = useLocalStorage(
    "favoriteArtPieces",
    []
  );

  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    if (!Array.isArray(favoriteArt)) {
      setFavoriteArt([{ slug, isFavorite: true }]);
      return;
    }

    const artPiece = favoriteArt.find((piece) => piece.slug === slug);

    if (artPiece) {
      // Toggle isFavorite for an existing favorite
      setFavoriteArt(
        favoriteArt.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        )
      );
    } else {
      // Add new favorite
      setFavoriteArt([...favoriteArt, { slug, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        artPieces={data}
        favoriteArt={favoriteArt}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
