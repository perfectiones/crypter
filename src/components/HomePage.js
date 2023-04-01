import { useState } from "react";
import ReactPlayer from "react-player";
import avatar from "../img/main/avatar.png";

import Countdown from "react-countdown";

function HomePage() {
  const Completionist = () => <span>Auction END!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="flex">
          <div className="hours">{hours}</div>
          <div className="minutes">{minutes}</div>
          <div className="sec">{seconds}</div>
        </span>
      );
    }
  };




  return (
    <>
      <main className="container">
        <div className="main__wrapper homepage">
          <div className="main__title tex-cen">
            <h3 className="title__2 f-pop">
              <p>Create, explore, & collect digital art NFTs.</p>
            </h3>

            <h2 className="title__1 f-sans">
              <p>The new creative economy.</p>
            </h2>

            <div className="title__button centr f-sans">
              <button>Start your search</button>
            </div>
          </div>

          <div className="main__lot row justif-ss-betw">
            <div className="col-xl-7 col-lg-7 col-12 lot__video"></div>

            <div className="col-xl-4 col-lg-4 col-12 lot__info">
              <div className="info__title f-sans">
                <h1>
                  <p>the creator network®</p>
                </h1>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-6 lot__creator">
                  <div className="creator__user flex">
                    <div className="user__avatar"></div>
                    <div className="user__info">
                      <div className="title f-pop">
                        <p>Creator</p>
                      </div>

                      <div className="name f-pop">
                        <p>Enrico Cole</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-6 lot__price flex">
                  <div className="price__avatar">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.5 2C8.54777 2 6.74816 2.161 5.30371 2.35177C4.00372 2.52346 3.02346 3.50372 2.85177 4.80371C2.66101 6.24816 2.5 8.04777 2.5 10C2.5 11.9522 2.661 13.7518 2.85177 15.1963C3.02346 16.4963 4.00372 17.4765 5.30371 17.6482C6.74816 17.839 8.54777 18 10.5 18C12.4522 18 14.2518 17.839 15.6963 17.6482C16.9963 17.4765 17.9765 16.4963 18.1482 15.1963C18.339 13.7518 18.5 11.9522 18.5 10C18.5 8.04777 18.339 6.24816 18.1482 4.80371C17.9765 3.50372 16.9963 2.52346 15.6963 2.35177C14.2518 2.16101 12.4522 2 10.5 2ZM5.04184 0.368993C2.84504 0.659124 1.15912 2.34504 0.868993 4.54184C0.669534 6.05208 0.5 7.94127 0.5 10C0.5 12.0587 0.669534 13.9479 0.868993 15.4582C1.15912 17.655 2.84504 19.3409 5.04184 19.631C6.55208 19.8305 8.44127 20 10.5 20C12.5587 20 14.4479 19.8305 15.9582 19.631C18.155 19.3409 19.8409 17.655 20.131 15.4582C20.3305 13.9479 20.5 12.0587 20.5 10C20.5 7.94127 20.3305 6.05208 20.131 4.54184C19.8409 2.34504 18.155 0.659124 15.9582 0.368993C14.4479 0.169534 12.5587 0 10.5 0C8.44127 0 6.55208 0.169534 5.04184 0.368993Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </div>

                  <div className="price__info">
                    <div className="title f-pop">
                      <p>Instant price</p>
                    </div>

                    <div className="cost f-pop">
                      <p>3.5 ETH</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-12 lot__bet tex-cen">
                    <div className="bet__title">
                      <p>Current Bid</p>
                    </div>
                    <div className="bet__price">
                      <p>1.00 ETH</p>
                    </div>
                    <div className="bet__price-trans">
                      <p>$3,618.36</p>
                    </div>
                    <div className="bet__auction">
                      <div className="auction__title">
                        <p>Auction ending in</p>
                      </div>
                      <div className="auction__timer">
                        <Countdown
                          date={Date.now() + 69859000}
                          renderer={renderer}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row lot__button">
                  <button className="button__bit col-12">Place a bid</button>
                  <button className="button__view col-12">View item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
