import React from "react";
import { TrophyIcon } from "../../assests/components";

export default function UpgradeBanner() {
  return (
    <div className="shadow-normalShadow">
      <div className="flex relative bg-green-main border-2 border-green-border shadow-innerShadow h-[116px] py-9 px-6 items-center cursor-pointer">
        <TrophyIcon />
        <h3 className="ml-6 text-main-100 shadow-white text-shadow-l text-lg font-bold">
          Go Pro Upgrade Now
        </h3>
        <div className="w-[66px] h-[71px] bg-main-100 absolute -top-0.5 right-6 flex justify-center items-center">
          <p className="text-yellow-higlight text-lg font-medium">$1</p>
        </div>
      </div>
    </div>
  );
}
