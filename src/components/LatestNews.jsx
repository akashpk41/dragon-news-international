import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-[var(--color-base-200)] md:w-11/12 md:mx-auto rounded-xl mt-3 p-2">
      <div className="flex items-center">
        {/* Left "Latest" Badge */}
        <span className="bg-[var(--color-secondary)] text-white px-4 py-1 font-semibold rounded-sm">
          Latest
        </span>

        {/* Marquee Text */}
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="ml-4 text-[var(--color-primary)] font-medium"
        >
          Match Highlights: Germany vs Spain — as it happened ! &nbsp; | &nbsp;
          Match Highlights: Argentina vs Brazil — full coverage ! &nbsp; | &nbsp;
          Breaking: Transfer news updates from Premier League ! &nbsp; | &nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
