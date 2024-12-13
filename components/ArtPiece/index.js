import Image from "next/image";

export default function ArtPiece({ name, imageSource, artist, year, genre }) {
  return (
    <>
      <Image
        src={imageSource}
        alt={`${name}`}
        width={200}
        height={200}
      />
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <h4>{year}</h4>
      <h4>{genre}</h4>
    </>
  );
}
