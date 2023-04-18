import { Link } from "react-router-dom";
import arrow from "../img/arrLeft.svg";
import crumbArr from "../img/ar.svg";

import uploadItem1 from "../img/uploadItem/uploaditem-1.png";
import uploadItem2 from "../img/uploadItem/uploaditem-2.png";

function UploadItem(props) {

    let uploadCreateDes = null;
    let uploadCreateMob = null;

    if(props.width > props.breakpoint) {
        uploadCreateDes = (
            <div className="upload__create flex upl-it-desc">
                <div className="create__item">

                    <img src={uploadItem1} alt="" />

                    <button className="f-sans centr">
                        <Link to="">
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
    } else {
        uploadCreateMob = (
            <div className="upload__create">
                <div className="create__item">


                </div>
                <div className="create__item"></div>
            </div>
        )
    }
    return(
        <>
            <main className="upload-page">
                <div className="nav__wrapper">
                    <div className="flex justif-ss-betw upload__nav container">
                            <button > 
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
    
                            <p className="f-sans next"> 
                                Upload Item
                            </p>
    
                        </div>
                        
                    </div>
                </div>

                <div className="upload__main container">
                    <div className="upload__title tex-cen f-sans">
                        Upload item
                    </div>

                    <div className="upload__subtitle tex-cen f-pop">
                        Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times
                    </div>

                   {uploadCreateDes}
                   {uploadCreateMob}

                   <div className="upload__bottom f-pop tex-cen">
                    We do not own your private keys and cannot access your funds without your confirmation.
                   </div>
                </div>  
            </main>
        </>
    );
};

export default UploadItem;