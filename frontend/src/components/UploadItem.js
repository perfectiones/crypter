import UploadNav from "./uploadItem/UploadNav.js";
import UploadCreateMob from "./uploadItem/UploadCreateMob";
import UploadCreateDes from "./uploadItem/UploadCreateDes";

function UploadItem(props) {

    let uploadCreateDes = null;
    let uploadCreateMob = null;

    if(props.width > props.breakpoint) {
        uploadCreateDes = <UploadCreateDes/>
    } else {
        uploadCreateMob = <UploadCreateMob/>
    }
    return(
        <>
            <main className="upload-page">
                
                <UploadNav/>
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