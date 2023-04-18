import Countdown from "react-countdown";

import VideoReact from "./VideoReact";

import bidItem1 from "../img/main/bid-item-1.png";
import bidItem2 from "../img/main/bid-item-2.png";
import bidItem3 from "../img/main/bid-item-3.png";

import adviceImg from "../img/Cubes.png";
import avatar from ".././img/main/avatar.png";
import avatar2 from ".././img/main/avatar-2.png";

import avatarBg from "../img/main/avatar-big-1.png";

import polygon from "../img/main/Polygon.png";

import collSm1 from "../img/main/collect-item1Sm.png";
import collSm2 from "../img/main/collect-item2Sm.png";
import collSm3 from "../img/main/collect-item3Sm.png";
import collSm4 from "../img/main/collect-item4Sm.png";
import collSm5 from "../img/main/collect-item5Sm.png";
import collSm6 from "../img/main/collect-item6Sm.png";
import collSm7 from "../img/main/collect-item7Sm.png";
import collSm8 from "../img/main/collect-item8Sm.png";
import collSm9 from "../img/main/collect-item9Sm.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import albumItem from "../../src/img/main/album-item.png";
import albumItem2 from "../../src/img/main/album-item-2.png";
import albumItem3 from "../../src/img/main/album-item-3.png";

import { useState, useRef, createRef, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HomePage(props) {
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
      circleNum: "3",
    },
    {
      creatorAvatar: avatar2,
      creatorName: "Anita Bins",
      creatorCost: "2.456",
      circleNum: "6",
    },
    {
      creatorAvatar: avatar,
      creatorName: "Joana Wuckert",
      creatorCost: "2.456",
      circleNum: "2",
    },
    {
      creatorAvatar: avatar,
      creatorName: "Lorena Ledner",
      creatorCost: "2.456",
      circleNum: "4",
    },
  ];

  const popularUser = [
    {
      popularAvatar: avatar,
      popularName: "Edd Harris",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Odell Hane",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Odell Hane",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Odell Hane",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Odell Hane",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Odell Hane",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Marlee Kuphal",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Payton Kunde",
      cost: "2.456",
      currency: "ETH"
    },
    {
      popularAvatar: avatar,
      popularName: "Payton Buckridge",
      cost: "2.456",
      currency: "ETH"
    },
  ];

  const minorImgRef = useRef([]);
  minorImgRef.current = [];

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

  const [elRefs, setElRefs] = useState([]);
  const [elRefs2, setElRefs2] = useState([]);

  const arrLength = minorItemList.length;

  useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  useEffect(() => {
    // add or remove refs
    setElRefs2((elRefs2) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs2[i] || createRef())
    );
  }, [arrLength]);

  let swiperAlbumMob = null;

  let swiperAlbumDesc = null;

  if (props.width < props.breakpoint2) {
    swiperAlbumMob = (
      <div className="main__album">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          className="main__album-swiper col-xl-4 col-lg-4 col-12"
        >
          <SwiperSlide>
            <div className="album__slide">
              <div className="slide__img">
                <img src={albumItem} alt="" />
              </div>

              <div className="slide__footer flex">
                <div className="avatar">
                  <img src={avatar} alt="" className="avatar" />
                </div>

                <div className="footer__text">
                  <div className="title f-pop">
                    <p>The future of ETH®</p>
                  </div>
                  <div className="sutitle f-pop">
                    <p>18 in stock</p>
                  </div>
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="album__slide">
              <div className="slide__img">
                <img src={albumItem} alt="" />
              </div>

              <div className="slide__footer flex">
                <div className="avatar">
                  <img src={avatar} alt="" className="avatar" />
                </div>

                <div className="footer__text">
                  <div className="title f-pop">
                    <p>ETH never die</p>
                  </div>
                  <div className="sutitle f-pop">
                    <p>18 in stock</p>
                  </div>
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="album__slide">
              <div className="slide__img">
                <img src={albumItem} alt="" />
              </div>

              <div className="slide__footer flex">
                <div className="avatar">
                  <img src={avatar} alt="" className="avatar" />
                </div>

                <div className="footer__text">
                  <div className="title f-pop">
                    <p>Future coming soon</p>
                  </div>
                  <div className="sutitle f-pop">
                    <p>18 in stock</p>
                  </div>
                </div>

                <div className="footer__bid">
                  <div className="bid__status f-pop">
                    <p>Highest bid</p>
                  </div>

                  <div className="bid__cost f-pop">
                    <p>0.27 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="album__slide">
              <div className="slide__img">
                <img src={albumItem} alt="" />
              </div>

              <div className="slide__footer flex">
                <div className="avatar">
                  <img src={avatar} alt="" className="avatar" />
                </div>

                <div className="footer__text">
                  <div className="title f-pop">
                    <p>Elon Musk silver coin 3d print</p>
                  </div>
                  <div className="sutitle f-pop">
                    <p>18 in stock</p>
                  </div>
                </div>

                <div className="footer__bid">
                  <div className="bid__status f-pop">
                    <p>Highest bid</p>
                  </div>

                  <div className="bid__cost f-pop">
                    <p>0.27 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="from-creator col-xl-3 col-lg-12 col-12 ">
          <div className="creator__title f-pop">
            <p>Latest upload from creators 🔥</p>
          </div>
          <ul>
            {creatorList.map((el, i) => (
              <li className="flex">
                <div className="creator__avatar">
                  <p className="circle f-pop">{creatorList[i].circleNum}</p>
                  <img
                    src={creatorList[i].creatorAvatar}
                    alt=""
                    className="avatar"
                  />
                </div>

                <div className="creator__text">
                  <div className="name f-pop">
                    <p>{creatorList[i].creatorName}</p>
                  </div>

                  <div className="bid f-pop">
                    <span className="cost">{creatorList[i].creatorCost}</span>
                    ETH
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
    );
  } else {
    swiperAlbumDesc = (
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
                <li className="minor__item flex justif-ss-end">
                  <div
                    className="item__img"
                    onMouseEnter={() => {
                      elRefs[i].current.classList.add("active");

                      elRefs2[i].current.classList.add("active");
                    }}
                    onMouseLeave={() => {
                      elRefs[i].current.classList.remove("active");

                      elRefs2[i].current.classList.remove("active");
                    }}
                    ref={elRefs[i]}
                  >
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

                    <button className="f-sans" ref={elRefs2[i]}>
                      Place a bid
                    </button>
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
                    <p className="circle f-pop">{creatorList[i].circleNum}</p>
                    <img
                      src={creatorList[i].creatorAvatar}
                      alt=""
                      className="avatar"
                    />
                  </div>

                  <div className="creator__text">
                    <div className="name f-pop">
                      <p>{creatorList[i].creatorName}</p>
                    </div>

                    <div className="bid f-pop">
                      <span className="cost">{creatorList[i].creatorCost}</span>
                      ETH
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
    );
  }

  const bidPrevSwiper = useRef();
  const bidNextSwiper = useRef();

  const mainLotPrevSwiper = useRef();
  const mainLotNextSwiper = useRef();

  const popularNavNext = useRef();
  const popularNavPrev = useRef();

  return (
    <>
      <main>
        <div className="main__wrapper homepage">
          <div className="container">
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
              <div className="col-xl-7 col-lg-7 col-12 lot__video">
                <VideoReact />
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  className="mySwiper"
                  navigation={{
                    prevEl: bidPrevSwiper.current,
                    nextEl: mainLotPrevSwiper.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = mainLotPrevSwiper.current;
                    swiper.params.navigation.nextEl = mainLotNextSwiper.current;
                  }}
                >
                  <div className="swiper__nav">
                    <button ref={mainLotPrevSwiper}>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
                          fill="#777E91"
                        />
                      </svg>
                    </button>
                    <button ref={mainLotNextSwiper}>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                          fill="#777E91"
                        />
                      </svg>
                    </button>
                  </div>
                  <SwiperSlide>
                    <div className="col-xl-12 col-lg-12 col-12 lot__info">
                      <div className="info__title f-sans">
                        <h1>
                          <p>the creator network®</p>
                        </h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-7 col-xl-7 col-6 lot__creator">
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
                        <div className="col-lg-5 col-xl-5 col-6 lot__price flex">
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
                  <SwiperSlide>
                    <div className="col-xl-12 col-lg-12 col-12 lot__info">
                      <div className="info__title f-sans">
                        <h1>
                          <p>the creator network®</p>
                        </h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-7 col-xl-7 col-6 lot__creator">
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
                        <div className="col-lg-5 col-xl-5 col-6 lot__price flex">
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
                  <SwiperSlide>
                    <div className="col-xl-12 col-lg-12 col-12 lot__info">
                      <div className="info__title f-sans">
                        <h1>
                          <p>the creator network®</p>
                        </h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-7 col-xl-7 col-6 lot__creator">
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
                        <div className="col-lg-5 col-xl-5 col-6 lot__price flex">
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
                </Swiper>
              </div>
            </div>

            {swiperAlbumMob}
            {swiperAlbumDesc}
          </div>

          <div className="main__popular">
            <div className="container">
              <div className="popular__title">
                <p className="title">Popular</p>
                <div className="accordion__list flex"></div>
              </div>

              <div className="swiper__wrapper">
                <div className="button__nav">
                  <button ref={popularNavNext} className="next">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                        fill="#777E91"
                      ></path>
                    </svg>
                  </button>
                  <button ref={popularNavPrev} className="prev">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
                        fill="#777E91"
                      />
                    </svg>
                  </button>
                </div>
                
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  className="main__popular-swiper col-xl-12 col-lg-12 col-12 "
                  slidesPerView={5}
                  spaceBetween={32}
                  navigation={{
                    prevEl: popularNavPrev.current,
                    nextEl: popularNavNext.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = popularNavPrev.current;
                    swiper.params.navigation.nextEl = popularNavNext.current;
                  }}
                  breakpoints={{
                    1121: {
                      slidesPerView: 5,
                    },
                    887: {
                      slidesPerView: 4,
                    },
                    657: {
                      slidesPerView: 3,
                    },
                    427: {
                      slidesPerView: 2,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                {popularUser.map((el, i) => (
                  <SwiperSlide>
                    <div className="popular__user f-pop">

                      <div className="user__title flex justif-ss-betw">
                        <div className="label bl">
                          <div className="flex f-pop align-cent">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.6668 3.33333H5.3335C4.96531 3.33333 4.66683 3.63181 4.66683 4V6.66667C4.66683 8.50762 6.15921 10 8.00016 10C9.84111 10 11.3335 8.50762 11.3335 6.66667V4C11.3335 3.63181 11.035 3.33333 10.6668 3.33333ZM5.3335 2C4.22893 2 3.3335 2.89543 3.3335 4V6.66667C3.3335 9.244 5.42283 11.3333 8.00016 11.3333C10.5775 11.3333 12.6668 9.244 12.6668 6.66667V4C12.6668 2.89543 11.7714 2 10.6668 2H5.3335Z"
                                fill="#FCFCFD"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.666504 5.3335C0.666504 4.22893 1.56193 3.3335 2.6665 3.3335H4.6665V8.66683H3.33317C1.86041 8.66683 0.666504 7.47292 0.666504 6.00016V5.3335ZM2.6665 4.66683H3.33317V7.3335C2.59679 7.3335 1.99984 6.73654 1.99984 6.00016V5.3335C1.99984 4.96531 2.29831 4.66683 2.6665 4.66683Z"
                                fill="#FCFCFD"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.3332 5.3335C15.3332 4.22893 14.4377 3.3335 13.3332 3.3335H11.3332V8.66683H12.6665C14.1393 8.66683 15.3332 7.47292 15.3332 6.00016V5.3335ZM13.3332 4.66683H12.6665V7.3335C13.4029 7.3335 13.9998 6.73654 13.9998 6.00016V5.3335C13.9998 4.96531 13.7014 4.66683 13.3332 4.66683Z"
                                fill="#FCFCFD"
                              />
                              <path
                                d="M8.00016 10C7.63197 10 7.3335 10.2985 7.3335 10.6667V12.6667H6.00016C5.63197 12.6667 5.3335 12.9651 5.3335 13.3333C5.3335 13.7015 5.63197 14 6.00016 14H10.0002C10.3684 14 10.6668 13.7015 10.6668 13.3333C10.6668 12.9651 10.3684 12.6667 10.0002 12.6667H8.66683V10.6667C8.66683 10.2985 8.36835 10 8.00016 10Z"
                                fill="#FCFCFD"
                              />
                            </svg>
                            #{i+1}
                          </div>
                        </div>

                        <div className="user__inter flex align-cent">
                          <div className="inter__plus">
                            <svg
                              width="11"
                              height="10"
                              viewBox="0 0 11 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.3999 10C5.95219 10 6.3999 9.55228 6.3999 9V6H9.3999C9.95219 6 10.3999 5.55228 10.3999 5C10.3999 4.44771 9.95219 4 9.3999 4H6.3999V1C6.3999 0.447715 5.95219 0 5.3999 0C4.84762 0 4.3999 0.447715 4.3999 1V4H1.3999C0.847618 4 0.399902 4.44771 0.399902 5C0.399902 5.55228 0.847617 6 1.3999 6H4.3999V9C4.3999 9.55228 4.84762 10 5.3999 10Z"
                                fill="#B1B5C4"
                              />
                            </svg>
                          </div>

                          <div className="inter__link">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.3731 7.51604C10.9249 7.49397 11.3544 7.02872 11.3323 6.47688L11.142 1.71753C11.1211 1.19663 10.7036 0.77913 10.1827 0.758292L5.42333 0.567891C4.87148 0.545814 4.40623 0.975275 4.38415 1.52712C4.36208 2.07896 4.79154 2.54421 5.34338 2.56629L7.82064 2.6654L0.950367 9.53567C0.559843 9.92619 0.559843 10.5594 0.950367 10.9499C1.34089 11.3404 1.97406 11.3404 2.36458 10.9499L9.23483 4.07963L9.3339 6.5568C9.35597 7.10864 9.82122 7.53811 10.3731 7.51604Z"
                                fill="#B1B5C4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="user__info tex-cen">
                        <div className="avatar">
                          <img src={avatarBg} alt="" />

                          <div className="polig">
                            <div className="img">
                              <img src={polygon} alt="" />

                              <div className="img__pol">
                                <svg
                                  width="13"
                                  height="12"
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.30263 1.56319C5.40718 1.38022 5.25238 1.15792 5.04449 1.19256L4.07277 1.35451C3.92425 1.37927 3.83115 1.52873 3.87441 1.67295L4.17708 2.68183C4.24021 2.89227 4.52459 2.92479 4.6336 2.73403L5.30263 1.56319Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M3.01684 2.29597C2.9611 2.11018 2.72508 2.05671 2.59849 2.20368C2.20593 2.65944 1.83516 3.13827 1.45122 3.59901C1.42985 3.62465 1.40947 3.65083 1.39006 3.67751C1.28594 3.82065 1.40424 4.00021 1.58124 4.00021H3.1921C3.35957 4.00021 3.47968 3.83878 3.43156 3.67837L3.01684 2.29597Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M1.50838 5C1.34022 5 1.22082 5.16392 1.30502 5.30947C1.33204 5.35617 1.3618 5.40182 1.39429 5.44612L4.99091 10.3506C5.05104 10.4326 5.11743 10.5064 5.18882 10.5719C5.34414 10.7145 5.53879 10.5502 5.47669 10.3487L3.88281 5.17637C3.8505 5.07152 3.75361 5 3.6439 5H1.50838Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M6.92396 10.3488C6.86186 10.5503 7.05646 10.7147 7.21181 10.5721C7.28326 10.5065 7.34971 10.4327 7.40991 10.3506L11.0065 5.44612C11.039 5.40182 11.0688 5.35617 11.0958 5.30947C11.18 5.16392 11.0606 5 10.8924 5H8.75686C8.64711 5 8.55021 5.07152 8.51791 5.17637L6.92396 10.3488Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M10.8191 3.9998C10.9961 3.9998 11.1144 3.82023 11.0103 3.67709C10.9909 3.65041 10.9705 3.62423 10.9491 3.59859C10.5652 3.13783 10.1944 2.65896 9.80181 2.20319C9.67521 2.05622 9.43921 2.10969 9.38346 2.29548L8.96871 3.67796C8.92061 3.83836 9.04071 3.9998 9.20821 3.9998H10.8191Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M8.32794 1.35453C8.47644 1.37928 8.56954 1.52874 8.52629 1.67296L8.22359 2.68192C8.16049 2.89236 7.87609 2.92487 7.76709 2.73412L7.09799 1.5632C6.99344 1.38022 7.14829 1.15792 7.35614 1.19256L8.32794 1.35453Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M6.20015 2.00781L7.12485 3.626C7.2201 3.79266 7.09975 4.00003 6.9078 4.00003H5.49255C5.3006 4.00003 5.18026 3.79266 5.2755 3.626L6.20015 2.00781Z"
                                    fill="#FCFCFD"
                                  />
                                  <path
                                    d="M6.43897 8.52322C6.36657 8.75857 6.03347 8.75857 5.96107 8.52322L4.97656 5.32352C4.92709 5.16277 5.0473 5 5.21552 5H7.18457C7.35277 5 7.47297 5.16277 7.42352 5.32352L6.43897 8.52322Z"
                                    fill="#FCFCFD"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="name">
                          <p>Edd Harris</p>
                        </div>

                        <div className="cost">
                          2.456 <span>ETH</span>
                        </div>
                      </div>
                      
                    </div>
                  </SwiperSlide>
                 ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="main__bid">
              <div className="bid__title flex align-cent">
                <p className="f-sans">Hot bid</p>

                <div className="bid-swiper__navigation swiper__nav">
                  <button ref={bidPrevSwiper}>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
                        fill="#777E91"
                      />
                    </svg>
                  </button>
                  <button ref={bidNextSwiper}>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                        fill="#777E91"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                className="main__bid-swiper bid__list col-xl-12 col-lg-12 col-12"
                slidesPerView={4}
                spaceBetween={32}
                breakpoints={{
                  // when window width is >= 640px

                  1120: {
                    slidesPerView: 4,
                  },
                  1119: {
                    slidesPerView: 3,
                  },
                  890: {
                    slidesPerView: 3,
                  },
                  778: {
                    slidesPerView: 2,
                  },
                  610: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                navigation={{
                  prevEl: bidPrevSwiper.current,
                  nextEl: bidNextSwiper.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = bidPrevSwiper.current;
                  swiper.params.navigation.nextEl = bidNextSwiper.current;
                }}
              >
                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem1} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem2} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem3} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem3} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem1} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem2} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem3} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem3} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem1} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bid__item">
                    <div className="item__img">
                      <img src={bidItem2} alt="" />
                    </div>

                    <div className="item__footer">
                      <div className="footer__title flex">
                        <p> Amazing digital art</p>
                        <div className="cost">2.45 ETH</div>
                      </div>

                      <div className="footer__stock">
                        <div className="avatar__list">
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                          <img src={avatar} alt="" />
                        </div>

                        <div className="stock__title">
                          <p>3 in stock</p>
                        </div>
                      </div>

                      <div className="footer__highest flex align-cent">
                        <div className="highest__status flex align-cent">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
                              fill="#777E91"
                            />
                            <path
                              d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
                              fill="#777E91"
                            />
                            <path
                              d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
                              fill="#777E91"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
                              fill="#777E91"
                            />
                          </svg>

                          <p className="f-pop">Highest bid</p>
                          <span className="f-pop">0.001 ETH</span>
                        </div>

                        <div className="status">New bid 🔥</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="main__collection">
              <div className="collection__title">
                <p className="f-sans">Hot collections</p>
              </div>

              <div className="collection__list flex">
                <div className="item">
                  <div className="item__img">
                    <img src={albumItem} alt="" />
                    <img src={collSm1} alt="" />
                    <img src={collSm2} alt="" />
                    <img src={collSm3} alt="" />
                  </div>

                  <div className="item__text">
                    <p className="title f-pop">Awesome collection</p>

                    <div className="text__user flex align-cent">
                      <div className="user__avatar">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="user__name f-pop">
                        <p>
                          <span>By</span> Kennith Olson
                        </p>
                      </div>
                      <div className="user__cost f-pop">28 items</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item__img">
                    <img src={bidItem1} alt="" />
                    <img src={collSm4} alt="" />
                    <img src={collSm5} alt="" />
                    <img src={collSm6} alt="" />
                  </div>

                  <div className="item__text">
                    <p className="title f-pop">Awesome collection</p>

                    <div className="text__user flex align-cent">
                      <div className="user__avatar">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="user__name f-pop">
                        <p>
                          <span>By</span> Kennith Olson
                        </p>
                      </div>
                      <div className="user__cost f-pop">28 items</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item__img">
                    <img src={bidItem2} alt="" />
                    <img src={collSm7} alt="" />
                    <img src={collSm8} alt="" />
                    <img src={collSm9} alt="" />
                  </div>

                  <div className="item__text">
                    <p className="title f-pop">Awesome collection</p>

                    <div className="text__user flex align-cent">
                      <div className="user__avatar">
                        <img src={avatar} alt="" />
                      </div>
                      <div className="user__name f-pop">
                        <p>
                          <span>By</span> Kennith Olson
                        </p>
                      </div>
                      <div className="user__cost f-pop">28 items</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main__advice">
              <div className="row align-cent flex">
                <div className="col-lg-5 col-xl-5 col-md-6">
                  <div className="advice__text">
                    <div className="title f-pop">
                      <p>Save your time with Stacks</p>
                    </div>

                    <div className="text f-sans">
                      <p>Earn free crypto with Crypter</p>
                    </div>

                    <div className="sutitle f-pop">
                      <p>A creative agency that lead and inspire</p>
                    </div>
                  </div>

                  <div className="advice__button flex f-sans">
                    <button>Earn now</button>
                    <button>Discover more</button>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-7 col-md-6">
                  <img src={adviceImg} alt="" />
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
