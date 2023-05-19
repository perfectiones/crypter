import Collapsible from "react-collapsible";

import bidItem1 from "../img/main/bid-item-1.png";
import bidItem2 from "../img/main/bid-item-2.png";
import bidItem3 from "../img/main/bid-item-3.png";

import avatar from ".././img/main/avatar.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import { useRef,useState } from "react";

function Faq() {
  const bidPrevSwiper = useRef();
  const bidNextSwiper = useRef();

  const [count, setCount] = useState(0);


  return (
    <>
      <main className="faq__wrapper container">
        <div className="faq__title f-pop">
          <span>learn how to get started</span>
          <p className="title__main f-sans">Frequently asked questions</p>
          <p className="title__text f-pop">
            Join Stacks community now to get free updates and also alot of
            freebies are waiting for you or <a href="#">Contact Support</a>
          </p>
        </div>
        <div className="faq__body flex justif-ss-betw">
          <aside className="body__aside">
            <ul className="aside__list">
              <li className="list__item">
                <div className="item__img">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3328 11.5332V4.97727L14.3231 5.57148C14.6388 5.76091 15.0483 5.65854 15.2378 5.34282C15.4272 5.02709 15.3248 4.61759 15.0091 4.42816L11.6612 2.41939L9.10037 0.876531L9.10032 0.876503C8.91417 0.764347 8.7713 0.678271 8.65023 0.613548C8.62197 0.597742 8.59328 0.58304 8.56422 0.569443C8.46345 0.520271 8.37611 0.48754 8.28637 0.467764C8.09734 0.42611 7.90152 0.42611 7.71249 0.467765C7.62252 0.487592 7.53496 0.520442 7.43386 0.569828C7.40532 0.583202 7.37714 0.597641 7.34939 0.613145C7.22816 0.677913 7.0851 0.764105 6.89856 0.876493L6.89853 0.876512L4.33389 2.42169L0.989786 4.42816C0.674066 4.61759 0.571689 5.02709 0.761121 5.34282C0.950553 5.65854 1.36006 5.76091 1.67578 5.57148L2.6661 4.97729V11.5332C2.6661 12.2799 2.6661 12.6533 2.81142 12.9385C2.93925 13.1894 3.14323 13.3934 3.39411 13.5212C3.67933 13.6665 4.05269 13.6665 4.79943 13.6665L5.99943 13.6665V9.6665C5.99943 8.56193 6.89486 7.6665 7.99943 7.6665C9.104 7.6665 9.99943 8.56193 9.99943 9.6665V13.6665L11.1994 13.6665C11.9462 13.6665 12.3195 13.6665 12.6048 13.5212C12.8556 13.3934 13.0596 13.1894 13.1874 12.9385C13.3328 12.6533 13.3328 12.2799 13.3328 11.5332Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className="item__text active">
                  <p>General</p>
                </div>
              </li>
              <li className="list__item">
                <div className="item__img">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00065 12.0002C9.31436 12.0002 12.0007 9.31387 12.0007 6.00016C12.0007 5.90102 11.9982 5.80244 11.9935 5.70448C11.9839 5.50612 12.1376 5.3335 12.3362 5.3335H13.334C14.0704 5.3335 14.6673 5.93045 14.6673 6.66683V13.3335C14.6673 14.0699 14.0704 14.6668 13.334 14.6668H6.66732C5.93094 14.6668 5.33398 14.0699 5.33398 13.3335V12.3358C5.33398 12.1372 5.50661 11.9834 5.70497 11.993C5.80293 11.9978 5.90151 12.0002 6.00065 12.0002Z" fill="#777E91"/>
                        <path d="M10.6673 6.00016C10.6673 8.57749 8.57798 10.6668 6.00065 10.6668C3.42332 10.6668 1.33398 8.57749 1.33398 6.00016C1.33398 3.42283 3.42332 1.3335 6.00065 1.3335C8.57798 1.3335 10.6673 3.42283 10.6673 6.00016Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className="item__text">
                  <p>Support</p>
                </div>
              </li>
              <li className="list__item">
                <div className="item__img">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.764116 8.94322L7.00162 0.306676C7.4142 -0.264593 8.31552 0.11151 8.19967 0.806602L7.33407 6.00021H10.6969C11.2407 6.00021 11.5558 6.61632 11.2373 7.0572L4.99985 15.6937C4.58726 16.265 3.68595 15.8889 3.8018 15.1938L4.6674 10.0002H1.30457C0.760723 10.0002 0.445699 9.3841 0.764116 8.94322Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className="item__text">
                  <p>Hosting</p>
                </div>
              </li>
              <li className="list__item">
                <div className="item__img">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1105 11.2221L11.2216 14.111C10.7307 14.6019 9.93478 14.6019 9.44386 14.111C9.1984 13.8656 9.1984 13.4676 9.44386 13.2221L13.2216 9.44435C13.4671 9.19889 13.8651 9.19889 14.1105 9.44435C14.6014 9.93527 14.6014 10.7312 14.1105 11.2221Z" fill="#777E91"/>
                        <path d="M6.00925 7.17694C6.02307 7.05872 5.99346 6.93636 5.9093 6.85219L1.9972 2.94009C1.82778 2.77067 1.55099 2.85618 1.58487 3.09337L2.36059 8.52337C2.55163 9.86065 3.40472 11.0112 4.62884 11.5824L7.24365 12.8027C7.49769 12.9212 7.79875 12.8682 7.99698 12.6699L12.6699 7.99698C12.8682 7.79875 12.9212 7.49769 12.8027 7.24365L11.5824 4.62885C11.0112 3.40473 9.86065 2.55163 8.52337 2.36059L3.09337 1.58488C2.8561 1.55098 2.77058 1.82785 2.94005 1.99733L6.85205 5.90932C6.93622 5.99349 7.0586 6.0231 7.17683 6.00926C7.22821 6.00325 7.28049 6.00016 7.33349 6.00016C8.06987 6.00016 8.66682 6.59711 8.66682 7.33349C8.66682 8.06987 8.06987 8.66682 7.33349 8.66682C6.59711 8.66682 6.00015 8.06987 6.00015 7.33349C6.00015 7.28053 6.00324 7.22829 6.00925 7.17694Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className="item__text">
                  <p>Product</p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="body__main">
            <div className="main__text">

              <Collapsible
                trigger={
                  <>
                    <div className="main__title flex align-cent justif-ss-betw">
                        <p>How does it work</p> 

                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                        </svg>
                    </div>
                  </>
                }
                openedClassName="opened"
              >
                <>
                    <p>
                    
                        The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                        Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                        production-ready library of stackable content blocks built in
                        React Native. Mix-and-match dozens of responsive elements to
                        quickly configure your favorite landing page layouts or hit the
                        ground running with 10 pre-built templates, all in light or dark
                        mode."
                    </p>

                    <button>Learn more</button>
                </>
                
              </Collapsible>

              <Collapsible
                trigger={
                  <>
                    <div className="main__title flex align-cent justif-ss-betw">
                        <p>How to start with Stacks</p> 

                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                        </svg>
                    </div>
                  </>
                }
                openedClassName="opened"
              >
                <>
                    <p>
                    
                        The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                        Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                        production-ready library of stackable content blocks built in
                        React Native. Mix-and-match dozens of responsive elements to
                        quickly configure your favorite landing page layouts or hit the
                        ground running with 10 pre-built templates, all in light or dark
                        mode."
                    </p>

                    <button>Learn more</button>
                </>
                
              </Collapsible>

              <Collapsible
                trigger={
                  <>
                    <div className="main__title flex align-cent justif-ss-betw">
                        <p>Dose it suppport Dark Mode</p> 

                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                        </svg>
                    </div>
                  </>
                }
                openedClassName="opened"
              >
                <>
                    <p>
                    
                        The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                        Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                        production-ready library of stackable content blocks built in
                        React Native. Mix-and-match dozens of responsive elements to
                        quickly configure your favorite landing page layouts or hit the
                        ground running with 10 pre-built templates, all in light or dark
                        mode."
                    </p>

                    <button>Learn more</button>
                </>
                
              </Collapsible>

              <Collapsible
                trigger={
                  <>
                    <div className="main__title flex align-cent justif-ss-betw">
                        <p>Does it support Auto-Layout</p> 

                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                        </svg>
                    </div>
                  </>
                }
                openedClassName="opened"
              >
                <>
                    <p>
                    
                        The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                        Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                        production-ready library of stackable content blocks built in
                        React Native. Mix-and-match dozens of responsive elements to
                        quickly configure your favorite landing page layouts or hit the
                        ground running with 10 pre-built templates, all in light or dark
                        mode."
                    </p>

                    <button>Learn more</button>
                </>
                
              </Collapsible>

              <Collapsible
                trigger={
                  <>
                    <div className="main__title flex align-cent justif-ss-betw">
                        <p>What is Stacks Design System</p> 

                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                        </svg>
                    </div>
                  </>
                }
                openedClassName="opened"
              >
                <>
                    <p>
                    
                        The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                        Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                        production-ready library of stackable content blocks built in
                        React Native. Mix-and-match dozens of responsive elements to
                        quickly configure your favorite landing page layouts or hit the
                        ground running with 10 pre-built templates, all in light or dark
                        mode."
                    </p>

                    <button>Learn more</button>
                </>
                
              </Collapsible>
            </div>
        
            
          </div>
        </div>
        
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

      </main>
    </>
  );
}

export default Faq;
