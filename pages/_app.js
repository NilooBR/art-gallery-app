import GlobalStyle from "../styles";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {

  const {data, isLoading, error} = useSWR("https://example-apis.vercel.app/api/art",fetcher)
  console.log("art pieces: ", data)


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
