import React from "react";

const Main = () => {
  return (
    <video
      autoPlay
      muted
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate" 
      disablePictureInPicture
      loop={true}
      controls
      className="w-screen"
      preload="none"
      poster="/videoplaceholder.png"
    >
      <source
        // src="https://firebasestorage.googleapis.com/v0/b/ozpeagency-27bcf.appspot.com/o/website_film.mp4?alt=media&token=b11d833b-9a0a-426d-aed1-69b30e86398b"
        // src="/website_film.mp4"
        src='/output_video.mp4'
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>
  );
};

export default Main;

// video from firebase storage allanheremidev@gmail.com