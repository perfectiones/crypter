//import { Routes , Route } from 'react-router-dom';

import "./styles/bootstrap.min.css";
import "./styles/null.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UploadItem from "./components/UploadItem";
import CreateSingleColl from "./components/CreateSingleColl";
import Footer from "./components/Footer";
import ConnectWallet from "./components/сonnectWallet";
import Faq from './components/Faq';

import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

import store from "./redux/store";
import SandBox from "./components/SandBox";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 679;
  const breakpoint2 = 992;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const bodyLock = () => {
    document.body.classList.toggle('lock');
  }

  let footerContentMob = null;
  let swiperAlbumMob = null;

  let footerContentDec = null;
  let swiperAlbumDesc = null;

  return (
    <>
      <Header 
        bodyLock={bodyLock}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              swiperAlbumDesc={swiperAlbumDesc}
              swiperAlbumMob={swiperAlbumMob}
              width={width}
              breakpoint={breakpoint}
              breakpoint2={breakpoint2}
            />
          }
        />
        <Route
          path="/upload"
          element={
            <UploadItem 
              width={width}
              breakpoint={breakpoint}
              breakpoint2={breakpoint2}
            />
          }
        />
        <Route
          path="/upload/create-single"
          element={
            <CreateSingleColl 
              width={width}
              breakpoint={breakpoint}
              breakpoint2={breakpoint2}
              store={store}
              bodyLock={bodyLock}
            />
          }
        />

        <Route
          path="/connect-wallet"
          element={
            <ConnectWallet/>
          }
        />

        <Route
          path="/faq"
          element={
            <Faq/>
          }
        />

        <Route
          path="/sandbox"
          element={
            <SandBox 
            />
          }
        />    

      
      </Routes>

      <Footer
        footerContentDec={footerContentDec}
        footerContentMob={footerContentMob}
        width={width}
        breakpoint={breakpoint}
        breakpoint2={breakpoint2}
      />
    </>
  );
}

export default App;
