import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { IUser } from "../../types/user.types";

// pre render all available paths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);

  const users = res.data as IUser[];

  const paths = users.map((user) => `/users/${user.name}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  console.log(params);

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const user = res.data as IUser;

  return {
    revalidate: 10, // it will try to update the static file every 10 seconds only, to increase performance!
    props: {
      user,
    },
  };
};

export default function UserPage({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>User</h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.phone}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
}
