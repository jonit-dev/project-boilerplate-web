import { useEffect } from "react";

import { withAuth } from "../components/HOC/withAuth";

function MainScreen() {
  return (
    <div>
      <h1>[Main Page]</h1>
    </div>
  );
}

export default withAuth(MainScreen);
