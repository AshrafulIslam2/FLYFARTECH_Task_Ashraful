import flightlogwithbg from "../src/assets/Bimanwithoutbg.png";
import "./App.css";
import { useEffect, useState } from "react";
import PriceComponent from "./components/PriceComponent";
import BaggageDetail from "./components/BaggageDetail";
import FarePolicy from "./components/FarePolicy";
import FareSummary from "./components/FareSummary";
import AllFlightDetails from "./components/FlightDetails";
import FlightSummary from "./components/FlightSummary";

function App() {
  const [FlightSummaries, SetFlightSummary] = useState({}); //flight Summary Upper component
  const [isToggle, SetToggle] = useState(true); // toggle use for change toggle between destination
  const [FDetails, SetFDetails] = useState([]); // flight details open after click flight detaisls
  const [fareSummary, SetfareSummary] = useState([]); // use for fare summary
  const [refundpolicy, Setrefundpolicy] = useState([]); // use for Refund Policy
  const [Baggage, SetBaggage] = useState([]); // use for baggage details
  const [togglefareDetails, SettogglefareDetails] = useState({
    toggle: true,
    detailsRender: "FlightDetails",
  }); // used for show show perticular details by clicking perticular button

  const FlightDetails = [
    {
      type: "flight Summary",
      data: {
        from: "Hazarat Sha Jalal Int. Airport",
        ShortFormofFrom: "DAC",
        FlightLogo: flightlogwithbg,
        departureTime: "19:00",
        DateOfJourney: "SUN 4th JUL 2023",
        to: "JF Kennedy  Int. Airport",
        shotfromofTo: "JFK",
        arrivalTime: "12:05",
        DateOfJourneyEnd: "MON 6th JUL 2023",
        NumberofTransit: 4,
        FlightName: "Biman Bangladesh Airlines",
        FlightNumber: "BG178|W & BG671|E",
        SeatType: "Class-W",
        Baggeage: "45 kg",
        Refundable: true,
        baseFare: "1850",
      },
    },
    {
      type: "flight Details",
      data: [
        {
          FlightName: "Biman Bangladesh Airlines",
          FlightNumber: "BG671",
          FlightLogo: flightlogwithbg,
          operatedBy: "BG",
          Economy: "E",
          from: "Hazarat Sha Jalal Int. Airport",
          ShortFormofFrom: "DAC",
          locaition: "Dhaka,BD",
          departureTime: "19:00",
          DateOfJourney: "SUN 4th JUL 2023",
          to: "JF Kennedy  Int. Airport",
          shotfromofTo: "JFK",
          arrivalTime: "12:05",
          ArrivalDestination: "Dubai,AEU",
          TotalTime: "7 hour",
        },
        {
          FlightName: "Biman Bangladesh Airlines",
          FlightNumber: "BG786",
          FlightLogo: flightlogwithbg,
          operatedBy: "BG",
          Economy: "B",
          from: "Hazarat Sha Jalal Int. Airport",
          ShortFormofFrom: "DAC",
          locaition: "Dhaka,BD",
          departureTime: "9:00",
          DateOfJourney: "SUN 4th JUL 2023",
          to: "JF Kennedy  Int. Airport",
          shotfromofTo: "JFK",
          arrivalTime: "14:05",
          ArrivalDestination: "Dubai,AEU",
          TotalTime: "7 hour",
        },
      ],
    },
    {
      type: "fare Summary",
      data: [
        {
          PayxType: "Adult x1",
          BaseFare: "4090",
          Tax: "275",
          Total: "4815",
          PaxCount: "1",
          ServiceFee: "0",
          SubTotal: "4815",
        },
        {
          PayxType: "Child x1",
          BaseFare: "4090",
          Tax: "275",
          Total: "4815",
          PaxCount: "1",
          ServiceFee: "0",
          SubTotal: "4815",
        },
        {
          PayxType: "Infant x1",
          BaseFare: "4090",
          Tax: "275",
          Total: "4815",
          PaxCount: "2",
          ServiceFee: "0",
          SubTotal: "9630",
        },
      ],
    },
    {
      type: "refundpolicy",
      data: [
        {
          typeofRefund: "Cancelletion",
          details: "Refund Ammount*PaindAmount - AirCancellation Fee",
        },
        {
          typeofRefund: "Re-Issue",
          details: "Re_issue_Fee*Airlins_Fee + Fair Difference",
        },
        {
          typeofRefund: "Void",
          details: "Re_issue_Fee*Airlins_Fee + Fair Difference",
        },
        {
          typeofRefund: "Refund",
          details: "Refund Ammount*PaindAmount - AirCancellation Fee",
        },
      ],
    },
    {
      type: "Baggage",
      data: [
        {
          typeofRefund: "Adult",
          CheckIm: "20",
          Cabin: "M",
        },
        {
          typeofRefund: "Child",
          CheckIm: "20",
          Cabin: "M",
        },
        {
          typeofRefund: "Infant",
          CheckIm: "20",
          Cabin: "M",
        },
      ],
    },
  ]; // Fake data for use

  useEffect(() => {
    FlightDetails.forEach((data) => {
      if (data.type === "flight Summary") {
        SetFlightSummary(data.data);
      }
      if (data.type === "flight Details") {
        SetFDetails(data.data);
      }
      if (data.type === "fare Summary") {
        SetfareSummary(data.data);
      }
      if (data.type === "refundpolicy") {
        Setrefundpolicy(data.data);
      }
      if (data.type === "Baggage") {
        SetBaggage(data.data);
      }
    });
  }, []); // filter data as per needs
  // toggle function used for rander particular data on particular click
  const toggle = (toggle, detailsrender) => {
    SettogglefareDetails((prev) => ({
      toggle: toggle,
      detailsRender: detailsrender || prev.detailsRender,
    }));
  };
  // this function used for how many stopes are here to show that dynamically
  const renderDivs = () => {
    const divs = [];
    console.log(FlightSummaries.NumberofTransit);

    for (let i = 1; i < FlightSummaries.NumberofTransit + 1; i++) {
      const leftPosition = i * 40;
      divs.push(
        <div
          style={{ left: `${leftPosition}px` }}
          className=" animate-pulse w-[6px] h-[6px] rounded-full bg-lime-600 absolute -top-[2px] "
          key={i}
        ></div>
      );
    }
    return divs;
  };
  return (
    <div className="sm:max-w-[1000px]  mx-auto  rounded-lg sm:shadow-lg   flex sm:flex-row flex-col mt-[40px] ">
      <div>
        <FlightSummary
          FlightSummaries={FlightSummaries}
          isToggle={isToggle}
          renderDivs={renderDivs}
          SetToggle={SetToggle}
        />
        {/* //button of details nevigation */}
        {togglefareDetails.toggle === true && (
          <div>
            <div className="flex sm:gap-[4.5rem] mt-[24px] ml-[24px]">
              <button
                className={`${
                  togglefareDetails.detailsRender === "FlightDetails" &&
                  "bg-lime-400"
                } ${
                  togglefareDetails.detailsRender === "FlightDetails"
                    ? "text-white"
                    : "text-black"
                }  rounded-md py-[5px] px-[8px] font-medium  text-[10px] sm:text-[14px] font-sans tracking-wider`}
                onClick={() => toggle(true, "FlightDetails")}
              >
                Flight Detaitls
              </button>
              <button
                className={`${
                  togglefareDetails.detailsRender === "FareSummary" &&
                  "bg-lime-400"
                }  ${
                  togglefareDetails.detailsRender === "FareSummary"
                    ? "text-white"
                    : "text-black"
                }  rounded-md py-[5px] px-[8px] font-medium text-[10px] sm:text-[14px] tracking-wider`}
                onClick={() => toggle(true, "FareSummary")}
              >
                {" "}
                Fare Summary
              </button>
              <button
                className={`${
                  togglefareDetails.detailsRender === "FarePolicy" &&
                  "bg-lime-400"
                } ${
                  togglefareDetails.detailsRender === "FarePolicy"
                    ? "text-white"
                    : "text-black"
                } rounded-md py-[5px] px-[8px] font-medium text-[10px] sm:text-[14px] tracking-wider`}
                onClick={() => toggle(true, "FarePolicy")}
              >
                Fare Policy
              </button>
              <button
                className={`${
                  togglefareDetails.detailsRender === "BAGGAGE" && "bg-lime-400"
                } ${
                  togglefareDetails.detailsRender === "BAGGAGE"
                    ? "text-white"
                    : "text-black"
                }  rounded-md py-[5px] px-[8px] font-medium text-[10px] sm:text-[14px] tracking-wider`}
                onClick={() => toggle(true, "BAGGAGE")}
              >
                BAGGAGE
              </button>
            </div>
            {/* Flight details */}
            <AllFlightDetails
              togglefareDetails={togglefareDetails}
              FDetails={FDetails}
              isToggle={isToggle}
            />
            {/* Flight details */}
            {/* FareSummary details */}
            <FareSummary
              togglefareDetails={togglefareDetails}
              fareSummary={fareSummary}
            />
            {/* FareSummary details */}
            <FarePolicy
              togglefareDetails={togglefareDetails}
              refundpolicy={refundpolicy}
            />
            {/* Baggage details */}
            <BaggageDetail
              togglefareDetails={togglefareDetails}
              Baggage={Baggage}
            />
          </div>
        )}
        {/* //button of details nevigation */}
      </div>

      {/* price component */}
      <PriceComponent
        FlightSummaries={FlightSummaries}
        toggle={toggle}
        togglefareDetails={togglefareDetails}
      />
    </div>
  );
}

export default App;
