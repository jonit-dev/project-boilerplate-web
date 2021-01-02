import axios from "axios";
import { GetStaticProps } from "next";

import { IUser } from "../types/user.types";

/*#############################################################|
|  >>> STATICPROPS EXAMPLE
*##############################################################*/

// getStaticProps will run on server-side, to generate this screen as a static file, useful for performance reasons (pages that are visited thousands of times per day and could be served statically to save resources!)

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = res.data as IUser[];

  return {
    revalidate: 10, // it will try to update the static file every 10 seconds only, to increase performance!
    props: {
      users,
    },
  };
};

export default function StaticPropsExample({ users }) {
  const onRenderUsers = (users: IUser[]) => {
    return users.map((user) => (
      <ul key={user.id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
      </ul>
    ));
  };

  return <div>{onRenderUsers(users)}</div>;
}
