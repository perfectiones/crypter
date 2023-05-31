import axios from "axios";
import { useEffect, useState } from "react";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";



function SandBox() {

    const [state, setState] = useState({
        notifOpen: false,
    })

    return(
        <div className="container" style={{margin: '30px 30px'}}>
            <span 
                data-tip='hover on me will keep the tooltip' 
                id="my-anchor-element" 
                
                onClick={() => setState({...state, notifOpen: !state.notifOpen})}
                >(･ω´･ )</span>
                
            <ReactTooltip 
                className='extraClass' 
                effect='solid' 
                anchorSelect="#my-anchor-element"
                openOnClick ={true}
                content={<>
                
                    Lorem, ipsum dolor.
                </>}
            />

            
        </div>
    )
}

export default SandBox;