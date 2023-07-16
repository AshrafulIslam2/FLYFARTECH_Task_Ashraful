import React from "react";

const AllFlightDetails = ({ togglefareDetails, FDetails, isToggle }) => {
  return (
    <div>
      {" "}
      {togglefareDetails.detailsRender === "FlightDetails" && (
        <div>
          {FDetails.map((data) => (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mx-2  sm:gap-[24px]  justify-items-center items-center m-[24px]">
              <div>
                <img
                  src={data.FlightLogo}
                  alt=""
                  className="w-[50px] h-[50px]"
                  srcset=""
                />
                <h1 className="text-[16px] sm:text-[24px] font-medium">
                  {data.FlightName}
                </h1>
                <h1 className=" text-[12px] sm:text-[18px] font-semibold text-green-800">
                  {data.FlightNumber}
                </h1>
                <h1 className=" text-[8px] sm:text-[10px] font-normal text-slate-400">
                  Operate By: {data.operatedBy}
                </h1>
                <h1 className="text-[8px] sm:text-[10px] font-normal text-slate-400">
                  Economy:{data.Economy}
                </h1>
              </div>
              {isToggle ? (
                <div>
                  <h1 className=" text-[10px] sm:text-[12px] font-normal text-slate-400">
                    Depart
                  </h1>
                  <h1 className=" text-[14px] sm:text-[24px] font-bold text-black">
                    {data.ShortFormofFrom}
                  </h1>
                  <h1 className="text-[12px] sm:text-[16px] font-semibold text-blue-400">
                    {data.locaition} | {data.departureTime}
                  </h1>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-black">
                    Terminal:{data.from}
                  </h1>
                  <h1 className="text-[8px] sm:text-[10px] font-normal text-slate-400">
                    {data.DateOfJourney}
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-400">
                    Arrival
                  </h1>
                  <h1 className="text-[14px] sm:text-[24px] font-bold text-black">
                    {data.shotfromofTo}
                  </h1>
                  <h1 className="text-[12px] sm:text-[16px] font-semibold text-blue-400">
                    {data.ArrivalDestination} | {data.arrivalTime}
                  </h1>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-black">
                    Terminal:{data.to}
                  </h1>
                  <h1 className=" text-[8px] sm:text-[10px] font-normal text-slate-400">
                    {data.DateOfJourneyEnd}
                  </h1>
                </div>
              )}

              <div className=" hidden sm:block half-arrow w-[40px] sm:w-[120px] h-[2px] bg-black relative">
                <h1 className="text-[12px] text-slate-300 absolute -top-[20px]">
                  5h 30 min
                </h1>
                <div className="half-triangle absolute -top-[8px] sm:-top-[8px] -right-[42px] sm:-right-[110px]"></div>
              </div>
              {isToggle ? (
                <div>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-slate-400">
                    Arrival
                  </h1>
                  <h1 className="text-[14px] sm:text-[24px] font-bold text-black">
                    {data.shotfromofTo}
                  </h1>
                  <h1 className="text-[12px] sm:text-[16px] font-semibold text-blue-400">
                    {data.ArrivalDestination} | {data.arrivalTime}
                  </h1>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-black">
                    Terminal:{data.to}
                  </h1>
                  <h1 className=" text-[8px] sm:text-[10px] font-normal text-slate-400">
                    {data.DateOfJourneyEnd}
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className=" text-[10px] sm:text-[12px] font-normal text-slate-400">
                    Depart
                  </h1>
                  <h1 className=" text-[13px] sm:text-[24px] font-bold text-black">
                    {data.ShortFormofFrom}
                  </h1>
                  <h1 className="text-[12px] sm:text-[16px] font-semibold text-blue-400">
                    {data.locaition} | {data.departureTime}
                  </h1>
                  <h1 className="text-[10px] sm:text-[12px] font-normal text-black">
                    Terminal:{data.from}
                  </h1>
                  <h1 className="text-[8px] sm:text-[10px] font-normal text-slate-400">
                    {data.DateOfJourney}
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFlightDetails;
