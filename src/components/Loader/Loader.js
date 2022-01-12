import React from "react";

import loaderSrc from "./loader.gif";

function Loader(props) {
  return (
    <div>
      <img style={{ width: 75 }} src={loaderSrc} alt="Loader icon" />
    </div>
  );
}

export default Loader;
