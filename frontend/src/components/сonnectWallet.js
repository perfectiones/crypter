import walletImg from '../img/conWallet/walleImg.png';

function ConnectWallet() {
    return(
        <main className="wallet-wrapper">
            <div className="container">
                <div className="wallet__title flex align-cent">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51444 1.109C7.83808 0.484661 6.78365 0.526832 6.1593 1.2032L0.774684 7.03646C0.185354 7.6749 0.185348 8.65896 0.774671 9.2974L6.15929 15.1308C6.78363 15.8072 7.83806 15.8494 8.51443 15.225C9.1908 14.6007 9.23298 13.5462 8.60865 12.8699L5.80597 9.83361L21.9994 9.83361C22.9198 9.8336 23.666 9.08741 23.666 8.16694C23.666 7.24646 22.9198 6.50027 21.9993 6.50027L5.80602 6.50027L8.60863 3.46414C9.23298 2.78778 9.19081 1.73335 8.51444 1.109Z" fill="#23262F"/>
                    </svg>
                    <p className="f-sans">Connect your wallet</p>
                </div>

                <div className="wallet__body flex align-cent">
                    <div className="wallet__method">
                        <div className="method__list">

                            <div className="method__item flex align-cent">
                                <div className="item__circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z" fill="#FCFCFD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z" fill="#FCFCFD"/>
                                        <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#FCFCFD"/>
                                    </svg>
                                </div>

                                <div className="item__text">
                                    <p>Formatic</p>
                                </div>
                            </div>

                            <div className="method__item flex align-cent">
                                <div className="item__circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z" fill="#FCFCFD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z" fill="#FCFCFD"/>
                                        <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#FCFCFD"/>
                                    </svg>
                                </div>

                                <div className="item__text">
                                    <p>Coinbase Wallet</p>
                                </div>
                            </div>

                            <div className="method__item flex align-cent">
                                <div className="item__circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z" fill="#FCFCFD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z" fill="#FCFCFD"/>
                                        <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#FCFCFD"/>
                                    </svg>
                                </div>

                                <div className="item__text">
                                    <p>MyEtherWallet</p>
                                </div>
                            </div>

                            <div className="method__item flex align-cent">
                                <div className="item__circle">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5ZM5 3C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H19C21.2091 21 23 19.2091 23 17V7C23 4.79086 21.2091 3 19 3H5Z" fill="#FCFCFD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 9.23858 15.2386 7 18 7H22C22.5523 7 23 7.44772 23 8C23 8.55228 22.5523 9 22 9H18C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H18C15.2386 17 13 14.7614 13 12Z" fill="#FCFCFD"/>
                                        <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#FCFCFD"/>
                                    </svg>
                                </div>

                                <div className="item__text">
                                    <p>Wallet Connect</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wallet__img">
                        <img src={walletImg} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ConnectWallet;