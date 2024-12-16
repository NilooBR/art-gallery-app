import Navigation from "@/components/Navigation";
import ArtPieces from "../pages/ArtPieces";
import Head from "next/head.js";

export default function HomePage() {

  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Navigation></Navigation>
    </div>
  );
}
