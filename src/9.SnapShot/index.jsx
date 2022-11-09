import { createRef, useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ImageProvider from "./ImageContext";
import Navigation from "./Navigation";
import Search from "./Search";
import "./style.css";
function SnapShot() {
  return (
    <div className="snap-shot">
      <ImageProvider>
        <Banner />
        <Search />
        <Navigation />
        <Gallery />
      </ImageProvider>
    </div>
  );
}

export default SnapShot;
