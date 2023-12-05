import React from "react";
import Image from "next/image";

type Props = {};

const Clients = (props: Props) => {
  return (
    <>
    <div className="text-black bg-white">

      <div className="p-4 py-4">
        <h1 className="text-4xl pb-8 p-4">OUR PARTNERS</h1>

        <div className="object-full w-full p-4 pb-4">
          <Image
            src={"/boredkitchen2.png"}
            width={400}
            height={400}
            alt="boredkitchen"
            className="h-48 w-full object-cover"
          />
          <h3 className="py-2 text-xl">Bored kitchen</h3>
        </div>
      </div>

      <div className="gap-y-4 p-4 py-4">
        <div className="object-full w-full p-4 pt-0 pb-4">
          <Image
            src={"/boredkitchen3.png"}
            width={400}
            height={400}
            alt="boredkitchen"
            className="h-48 w-full object-cover"
          />
          <h3 className="py-2 text-xl">Bored kitchen</h3>
        </div>
      </div>

      <div className="gap-y-4 p-4 pb-4">
        <div className="object-full w-full p-4 pb-4">
          <Image
            src={"/boredkitchen1.png"}
            width={400}
            height={400}
            alt="boredkitchen"
            className="h-48 w-full object-cover"
          />
          <h3 className="py-2 text-xl">Bored kitchen</h3>
        </div>
      </div>

    </div>

    </>
  );
};

export default Clients;
