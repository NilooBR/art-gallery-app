import Image from "next/image";

export default function ArtPiece({ name, imageSource, artist, year, genre }) {
  return (
    <>
      <Image src={imageSource} alt={`${name}`} width={200} height={200} />
      <h5>
        {name} <br />
        {artist}
        <br />
        {year}
        <br />
        {genre}
      </h5>
    </>
  );
}
