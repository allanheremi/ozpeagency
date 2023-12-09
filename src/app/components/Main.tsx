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
        src="https://sweet.se/wp-content/uploads/2022/04/Sweet_Headervideo-2022-01.mp4"
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>
  );
};

export default Main;
