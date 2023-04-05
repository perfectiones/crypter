import Countdown from "react-countdown";

import avatar from ".././img/main/avatar.png";
import avatar2 from ".././img/main/avatar-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import albumItem from "../../src/img/main/album-item.png";
import albumItem2 from "../../src/img/main/album-item-2.png";
import albumItem3 from "../../src/img/main/album-item-3.png";

import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HomePage() {
  const minorItemList = [
    {
      img: avatar,
      cost: "0.27 ETH",
      title: "ETH never die",
      counter: "1 of 12",
      albumImg: albumItem2,
    },
    {
      img: avatar,
      cost: "0.27 ETH",
      title: "Future coming soon",
      counter: "1 of 3",
      albumImg: albumItem2,
    },
    {
      img: avatar,
      cost: "0.27 ETH",
      title: "Elon Musk silver coin 3d print",
      counter: "1 of 4",
      albumImg: albumItem3,
    },
  ];

  const creatorList = [
    {
      creatorAvatar: avatar,
      creatorName: "Payton Harris",
      creatorCost: "2.456",
    },
    {
      creatorAvatar: avatar2,
      creatorName: "Anita Bins",
      creatorCost: "2.456",
    },
    {
      creatorAvatar: avatar,
      creatorName: "Joana Wuckert",
      creatorCost: "2.456",
    },
    {
      creatorAvatar: avatar,
      creatorName: "Lorena Ledner",
      creatorCost: "2.456",
    },
  ];

  const Completionist = () => <span>Auction END!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="flex">
          <div className="hours">
            <p className="f-sans">{hours}</p>
            <p className="title f-pop">Hrs</p>
          </div>
          <div className="minutes">
            <p className="f-sans">{minutes}</p>
            <p className="title f-pop">mins</p>
          </div>
          <div className="sec">
            <p className="f-sans">{seconds}</p>
            <p className="title f-pop">secs</p>
          </div>
        </span>
      );
    }
  };

  const [minorItemHov, setminorItemHov] = useState(false);

  const handleMouseEnter = (event) => {};

  const handleMouseLeave = (event) => {};

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
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              className="mySwiper col-xl-4 col-lg-4 col-12"
            >
              <SwiperSlide>
                <div className="col-xl-12 col-lg-12 col-12 lot__info">
                  <div className="info__title f-sans">
                    <h1>
                      <p>the creator network®</p>
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-7 lot__creator">
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
                    <div className="col-5 lot__price flex">
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
                        <div className="bet__title f-pop">
                          <p>Current Bid</p>
                        </div>
                        <div className="bet__price f-sans">
                          <p>1.00 ETH</p>
                        </div>
                        <div className="bet__price-trans f-pop">
                          <p>$3,618.36</p>
                        </div>
                        <div className="bet__auction">
                          <div className="auction__title f-pop">
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
                      <button className="button__bit col-12 f-sans">
                        Place a bid
                      </button>
                      <button className="button__view col-12 f-sans">
                        View item
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>1</SwiperSlide>
              <SwiperSlide>2</SwiperSlide>
            </Swiper>
          </div>

          <div className="main__album">
            <div className="row">
              <div className="album__major col-xl-5 col-lg-6 col-12 ">
                <div className="major__img">
                  <img src={albumItem} alt="" />
                </div>
                <div className="major__footer flex">
                  <div className="footer__avatar">
                    <img src={avatar} alt="" className="avatar" />
                  </div>

                  <div className="footer__text">
                    <p className="title f-pop">The future of ETH®</p>
                    <p className="subtitle f-pop">18 in stock</p>
                  </div>

                  <div className="footer__bid">
                    <div className="bid__status f-pop">
                      <p>Highest bid</p>
                    </div>

                    <div className="bid__cost f-pop">
                      <p>1.125 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="album__minor col-xl-4 col-lg-6 col-12 ">
                <ul>
                  {minorItemList.map((el, i) => (
                    <li
                      className="minor__item flex justif-ss-end"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="item__img">
                        <img src={minorItemList[i].albumImg} alt="" />
                      </div>

                      <div className="item__text">
                        <div className="name f-pop">
                          <p>{minorItemList[i].title}</p>
                        </div>

                        <div className="bids-info flex">
                          <div className="bid__leader">
                            <img
                              src={minorItemList[i].img}
                              alt=""
                              className="avatar"
                            />
                          </div>

                          <div className="bid__cost">
                            <p>{minorItemList[i].cost}</p>
                          </div>

                          <div className="bid__counter">
                            <p>{minorItemList[i].counter}</p>
                          </div>
                        </div>

                        <button className="f-sans">Place a bid</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="from-creator col-xl-3 col-lg-12 col-12 ">
                <div className="creator__title f-pop">
                  <p>Latest upload from creators 🔥</p>
                </div>
                <ul>
                  {creatorList.map((el, i) => (
                    <li className="flex">
                    <div className="creator__avatar">
                      <img src={creatorList[i].creatorAvatar} alt="" className="avatar" />
                    </div>

                    <div className="creator__text">
                      <div className="name f-pop">
                        <p>{creatorList[i].creatorName}</p>
                      </div>

                      <div className="bid f-pop">
                        <span className="cost">{creatorList[i].creatorCost}</span> ETH
                      </div>
                    </div>
                  </li>
                  ))}
                </ul>
                <button className="from-creator__button flex f-sans">
                  Discover more
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.39413 0.843309C6.66467 0.593571 7.08644 0.61044 7.33618 0.880985L9.49003 3.21429C9.72576 3.46967 9.72576 3.86329 9.49003 4.11867L7.33619 6.45203C7.08645 6.72257 6.66468 6.73945 6.39413 6.48971C6.12358 6.23998 6.10671 5.81821 6.35644 5.54766L7.47752 4.33315L1.00016 4.33315C0.631972 4.33315 0.333496 4.03467 0.333496 3.66648C0.333496 3.29829 0.631972 2.99982 1.00016 2.99982L7.47749 2.99982L6.35645 1.78536C6.10671 1.51482 6.12358 1.09305 6.39413 0.843309Z"
                      fill="#23262F"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
