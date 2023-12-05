import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    // @DEV padding here to show BG white top?
    <video controls autoPlay={true} muted >
      <source
        src="https://sweet.se/wp-content/uploads/2022/04/Sweet_Headervideo-2022-01.mp4"
        type="video/mp4"
      />
      Your browser does not support this video format
    </video>

    

  );
};

export default Main;
