import React from "react";

import { Link } from "react-router-dom";

import crumbArr from "../../img/ar.svg";
import uploadItem2 from "../../img/uploadItem/uploaditem-2.png";
import Collapsible from "react-collapsible";

function UploadCreateMob() {
    
    return(
        
        <div className="upload__create upl-it-mob">
                    <div className="create__item">
                        <Collapsible openedClassName="opened" trigger={<>
                            <Link to="/upload/create-single">
                                <div className="flex align-cent">
                                    <div className="item__img">
            
                                    </div>

                                    <div className="item__text f-pop">
                                        Create Single
                                    </div>
                                    
                                    <img src={crumbArr} alt="" className="item__arrow"/>
                                </div>
                            </Link>
                        </>}>
                            
                        </Collapsible>
                    </div>
                
                <div className="create__item">
                    <Collapsible openedClassName="opened" trigger={<>
                        <div className="flex align-cent">
                            <div className="item__img">
                                <img src={uploadItem2} alt="" />
                            </div>

                            <div className="item__text f-pop">
                                Create Multiple
                            </div>
                            
                            <img src={crumbArr} alt="" className="item__arrow"/>
                        </div>
                    </>}>
                        
                    </Collapsible>
                </div>
        </div>

    )
}

export default UploadCreateMob;