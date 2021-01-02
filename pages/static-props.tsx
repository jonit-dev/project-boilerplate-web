import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) =>
  // This will run on server-side, to generate this screen as a static file, useful for performance reasons (pages that are visited thousands of times per day and could be served statically to save resources!)

  ({
    revalidate: 10, // it will try to update the static file every 10 seconds only, to increase performance!
    props: {
      myFavNum: 5,
    },
  });

export default function StaticPropsExample({ myFavNum }) {
  return (
    <div>
      <p>This is a static page. Number: {myFavNum}</p>
    </div>
  );
}
