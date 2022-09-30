import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section>
      <h2>404</h2>
      <p>Page not Found</p>
      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default Error;
