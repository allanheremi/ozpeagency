import React from "react";
const token = process.env.FIREBASE_STORAGE_TOKEN;

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
    >
      <source
        src={`https://firebasestorage.googleapis.com/v0/b/ozpeagency-27bcf.appspot.com/o/website_film.mp4?alt=media&token=${token}`}
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>
  );
};

export default Main;

// video from firebase storage allanheremidev@gmail.com
