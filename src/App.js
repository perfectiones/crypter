//import { Routes , Route } from 'react-router-dom';

import "./styles/bootstrap.min.css";
import "./styles/null.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import UploadItem from "./components/UploadItem";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

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

  let footerContentMob = null;
  let swiperAlbumMob = null;

  let footerContentDec = null;
  let swiperAlbumDesc = null;

  return (
    <>
      <Header />

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
