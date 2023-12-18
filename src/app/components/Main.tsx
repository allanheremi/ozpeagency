'use client'
import React, { useEffect, useRef } from "react";

const Main: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoElement) {
          // Load the video when it comes into the viewport
          videoElement.load();
          // Remove the observer after loading
          observer.unobserve(videoElement);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoElement) {
      // Start observing the video element
      observer.observe(videoElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      disablePictureInPicture
      loop
      controls
      className="w-screen"
    >
      <source
        src="https://firebasestorage.googleapis.com/v0/b/ozpeagency-27bcf.appspot.com/o/website_film.mp4?alt=media&token=b11d833b-9a0a-426d-aed1-69b30e86398b"
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>
  );
};

export default Main;
