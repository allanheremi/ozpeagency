import React from "react";

const Main = () => {
  return (
    // @DEV padding here to show BG white top?
    <video
      autoPlay
      muted
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate" 
      disablePictureInPicture
      loop={true}
      controls
    >
      <source
        src="website_film.mp4"
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>
  );
};

export default Main;
