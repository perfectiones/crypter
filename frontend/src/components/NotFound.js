import nfoundImg from '../img/noFound/noFound.png';
import nfoundMore1 from '../img/noFound/nf-more-1.png';
import nfoundMore2 from '../img/noFound/nf-more-2.png';
import nfoundMore3 from '../img/noFound/nf-more-3.png';
import nfoundMore4 from '../img/noFound/nf-more-4.png';

function NotFound() {
    return(
        <main className="nFound container"
            style={{marginBottom: '48px'}}
        >
        
        <div className="nFound__img flex"
            style={{justifyContent:'center'}}
        >
            <img src={nfoundImg} alt="ops :(" 
                style={{maxWidth:'100%', maxHeight:'100%'}}
            />
        </div>

        <div className="result">
            <p 
                className="title tex-cen f-sans" 
                style={{marginBottom:'8px'}}
            >
                Sorry, we couldn’t find any results for this search.
            </p>

            <p 
                className="subtitle tex-cen f-pop"
                style={{marginBottom:'24px'}}
            >
                Maybe give one of these a try?
            </p>
            
            <label className="newSeach flex align-cent centr" 
                htmlFor="newSearch"
            >
                <input 
                    type="text" 
                    name="newSearch" id="newSearch" 
                    className="result__newsearch" 
                    placeholder="Enter your search..."
                />

                <button className="newSearch__button flex"
                    style={{justifyContent:"center", alignItems:'center', width:'32px', height:'32px', borderRadius:'50%', backgroundColor:'#3772FF'}}
                >
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z" fill="#FCFCFD"/>
                    </svg>
                </button>
            </label>
        </div>

        <div className="result__explore"
        >
            <div className="explore__title tex-cen f-pop"
                style={{marginBottom:'48px'}}
            >
                <p>Explore more</p>
            </div>

            <ul className="explore__res flex align-cent"
                
            >

                <li className="flex"
                    style={{gap:'12px'}}
                >
                    <div className="avatar">
                        <img src={nfoundMore1} alt="" />
                    </div>

                    <div className="text">
                        <div className="title">
                            <p>Artwork</p>
                        </div>
                        <div className="subtitle">
                            <p>138 items</p>
                        </div>
                    </div>
                </li>

                <li className="flex"
                    style={{gap:'12px'}}
                >
                    <div className="avatar">
                        <img src={nfoundMore2} alt="" />
                    </div>

                    <div className="text">
                        <div className="title">
                            <p>Photography</p>
                        </div>
                        <div className="subtitle">
                            <p>138 items</p>
                        </div>
                    </div>
                </li>

                <li className="flex"
                    style={{gap:'12px'}}
                >
                    <div className="avatar">
                        <img src={nfoundMore3} alt="" />
                    </div>

                    <div className="text">
                        <div className="title">
                            <p>Game</p>
                        </div>
                        <div className="subtitle">
                            <p>138 items</p>
                        </div>
                    </div>
                </li>

                <li className="flex"
                    style={{gap:'12px'}}
                >
                    <div className="avatar">
                        <img src={nfoundMore4} alt="" />
                    </div>

                    <div className="text">
                        <div className="title">
                            <p>Music</p>
                        </div>
                        <div className="subtitle">
                            <p>138 items</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </main>
    )
    
}

export default NotFound;