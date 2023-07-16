import React from "react";

const FlightSummary = ({
  FlightSummaries,
  isToggle,
  renderDivs,
  SetToggle,
}) => {
  return (
    <div className="sm:max-w-[816px] sm:h-[240px]   rounded-lg sm:shadow-lg flex sm:flex-row flex-col justify-center items-center">
      <div className="mx-[24px]">
        <img
          src={FlightSummaries.FlightLogo}
          className=" w-[50px] h-[50px] rounded-full"
          alt="flyfartech"
        />
        <h1 className=" text-[18px] sm:text-[24px] font-medium">
          {FlightSummaries.FlightName}
        </h1>
        <h1 className="text-[12px] text-slate-300 font-normal">
          {FlightSummaries.FlightNumber}
        </h1>
        <h1 className="text-center text-[10px] text-slate-300 font-bold my-2">
          5H 36 MIN
        </h1>
        <div className="bg-slate-300 rounded-md w-[200px] h-[2px] relative">
          <div className="w-[10px] h-[10px] rounded-full bg-slate-400 left-0 -top-[4px] absolute"></div>
          {renderDivs()}
          <div className="w-[10px] h-[10px] rounded-full bg-slate-400 right-0 -top-[4px] absolute"></div>
        </div>
        <h1 className="text-center text-[10px] text-slate-300 font-bold mt-2">
          {FlightSummaries.NumberofTransit} STOPS
        </h1>
      </div>
      <div className=" flex justify-center gap-[3rem] items-center flex-grow mx-[16px] my-[16px] sm:mx-0 sm:my-0">
        {isToggle ? (
          <div>
            <h1 className="text-[18px] sm:text-[24px] font-bold text-black">
              {FlightSummaries.ShortFormofFrom}
            </h1>
            <h1 className=" text-[12px] sm:text-[14px] font-normal text-black">
              {FlightSummaries.from}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.departureTime}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.DateOfJourney}
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="text-[18px] sm:text-[24px] font-bold text-black">
              {FlightSummaries.shotfromofTo}
            </h1>
            <h1 className="text-[12px] sm:text-[14px] font-normal text-black">
              {FlightSummaries.to}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.arrivalTime}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.DateOfJourneyEnd}
            </h1>
          </div>
        )}
        <div className="">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jr0dk7 w-[100px]"
            focusable="false"
            aria-hidden="true"
            transform="rotate(90)"
            viewBox="0 0 24 24"
            onClick={() => SetToggle(true)}
            fill={isToggle ? "lightGreen" : "white"}
            data-testid="FlightOutlinedIcon"
            stroke={isToggle ? "lightGreen" : "black"}
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
          </svg>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10w0s29"
            focusable="false"
            aria-hidden="true"
            transform="rotate(-90)"
            viewBox="0 0 24 24"
            fill={isToggle ? "white" : "lightGreen"}
            data-testid="FlightOutlinedIcon"
            onClick={() => SetToggle(false)}
            stroke={isToggle ? "black" : "lightGreen"}
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
          </svg>
        </div>
        {isToggle ? (
          <div>
            <h1 className="text-[18px] sm:text-[24px] font-bold text-black">
              {FlightSummaries.shotfromofTo}
            </h1>
            <h1 className="text-[12px] sm:text-[14px] font-normal text-black">
              {FlightSummaries.to}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.arrivalTime}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.DateOfJourneyEnd}
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="text-[18px] sm:text-[24px] font-bold text-black">
              {FlightSummaries.ShortFormofFrom}
            </h1>
            <h1 className=" text-[12px] sm:text-[14px] font-normal text-black">
              {FlightSummaries.from}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.departureTime}
            </h1>
            <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-300">
              {FlightSummaries.DateOfJourney}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSummary;
