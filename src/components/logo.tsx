import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/logo.png"}
      alt="alshalabi"
      width={2000}
      height={2000}
      className="h-auto w-[15rem] md:w-[18rem]"
    />
  );
};

export default Logo;
