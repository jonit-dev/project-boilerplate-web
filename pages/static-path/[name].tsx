import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

// getStaticProps runs at BUILD TIME. It does not run at RUNTIME
export const getStaticProps: GetStaticProps = async (context) => ({
  revalidate: 10,
  props: {
    variable: "random",
  },
});

// BUILD START
// localhost:3000/fruit/hello => take output => store on disk
// localhost:3000/fruit/world => take output => store on disk
// localhost:3000/fruit/randomstringhere => call getStaticProps on server => render page => nextjs add this page to the path list for subsequent fast access

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
  fallback: true,
});

export default function StaticPathExample(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <div>{props.variable}</div>;
}
