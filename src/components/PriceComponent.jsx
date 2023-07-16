import React from "react";

const PriceComponent = ({ FlightSummaries, toggle, togglefareDetails }) => {
  return (
    <div className="sm:border-l-2 sm:border-l-slate-400 border-dashed sm:w-[316px]  h-full rounded-lg shadow-lg sm:h-[241px]">
      <h1 className="text-[34px] font-semibold text-center">
        ৳ {FlightSummaries.baseFare}
      </h1>
      <div className="flex flex-col sm:justify-end  h-[170px]">
        <button className="bg-lime-400 rounded-md my-[24px] sm:my-0 sm:mb-[34px] py-1 text-white text-[16px] mx-[24px]">
          Book now
        </button>
        <button
          className="text-[12px] font-bold"
          onClick={() => toggle(!togglefareDetails.toggle, "FlightDetails")}
        >
          {togglefareDetails.toggle ? "Hide Details" : "Flight details"}
        </button>
      </div>
    </div>
  );
};

export default PriceComponent;
