import React from "react";

import "../css/santa.css";

function Santa() {
  return (
    <div id='santa'>
      <img id='santaImage' src={__dirname + "santa.png"} alt='' />
    </div>
  );
}

export default Santa;
