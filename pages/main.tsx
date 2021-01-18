import Link from "next/link";
import { useEffect } from "react";

import { withAuth } from "../components/HOC/withAuth";

function MainScreen() {
  return (
    <div>
      <h1>[Main Page]</h1>

      <ul>
        <li>
          <Link href="/auth/change-password">Change Password</Link>
        </li>
      </ul>
    </div>
  );
}

export default withAuth(MainScreen);
