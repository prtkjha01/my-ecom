import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
// import { AspectRatio, Image } from '@chakra-ui/react'
import {ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import styles from "../styles/CarouselComp.module.css";

const CarouselComp = () => {
  // const breakPoints = [
  //   { width: 550, itemsToShow: 5 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 }
  // ]
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    // {
    //   id : 5,
    //   imageUrl: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    // },
    // {
    //   id : 6,
    //   imageUrl: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    // },
    // {
    //   id : 7,
    //   imageUrl: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    // }
  ]);
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = items.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = items.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-20 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${styles.buttons} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img"  aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {  (isLeft ?  (<ArrowLeftIcon/>) : (<ArrowRightIcon/>))}
      </span>
    </button>
  );
  return (
    <div className="">
      {/* <img src="https://lh4.googleusercontent.com/idjPZ63unXZXi8wO4v7EyTr_lyS7sO_00L2V80bYctLKGTLSx5BCPR39bv9uOgYmtTI=w2400" alt="my image here"></img> */}
      <div className=" flex justify-center w-screen  items-center">
      <div className="relative w-full">
        <div className={styles.carousel}>
          {sliderControl(true)}
          {items.map((item, i) => (
            <div className="w-full flex-shrink-0" key={item.id} ref={refs[i]}>
              <img src={item.imageUrl} className={styles.carouselImage+" w-full object-contain"} />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarouselComp;
