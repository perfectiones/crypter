import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../img/arrLeft.svg";
import crumbArr from "../../img/ar.svg";

function UploadNav() {
  return (
    <div className="nav__wrapper">
      <div className="flex justif-ss-betw upload__nav container">
        <button>
          <Link to="/" className="flex align-cent">
            <img src={arrow} alt="" />
            Back to home
          </Link>
        </button>

        <div className="nav__crumbs flex align-cent d-3-none">
          <Link to="/" className="f-sans prev">
            Home
          </Link>

          <img src={crumbArr} alt="" />

          <p className="f-sans next">Upload Item</p>
        </div>
      </div>
    </div>
  );
}

export default UploadNav;
