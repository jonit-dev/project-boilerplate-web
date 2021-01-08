import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/landing/css/style.css"></link>
        <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
        <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
      </Head>
      <div className="is-boxed has-animations">
        <h1>Hi there</h1>
        <script src="/landing/main.js"></script>
      </div>
    </>
  );
}
