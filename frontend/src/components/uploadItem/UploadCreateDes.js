import React from "react";

import { Link } from "react-router-dom";

import uploadItem1 from "../../img/uploadItem/uploaditem-1.png";
import uploadItem2 from "../../img/uploadItem/uploaditem-2.png";

function UploadCreateDes() {
    return(
        <div className="upload__create flex upl-it-desc">
                <div className="create__item">

                    <img src={uploadItem1} alt="" />

                    <button className="f-sans centr">
                        <Link to="/upload/create-single">
                            Create Single
                        </Link>
                    </button>
                </div>
                <div className="create__item">

                    <img src={uploadItem2} alt="" />    

                    <button className="f-sans centr">
                        <Link to="">
                            Create Multiple
                        </Link>
                    </button>
                </div>
            </div>
    )
}

export default UploadCreateDes;