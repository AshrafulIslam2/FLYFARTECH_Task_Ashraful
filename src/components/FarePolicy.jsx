import React from "react";

function FarePolicy({ togglefareDetails, refundpolicy }) {
  return (
    <div>
      {" "}
      {/* FarePolicy details */}
      {togglefareDetails.detailsRender === "FarePolicy" && (
        <div className="grid grid-cols-2 gap-6 m-[24px]">
          {refundpolicy.map((data) => (
            <div>
              <button className="bg-lime-400 px-2 py-1 rounded-sm text-center text-white text-[12px]  mb-[16px]">
                {data.typeofRefund}
              </button>
              <p className="text-[10px] font-medium text-slate-500 tracking-wide">
                {data.details}
              </p>
            </div>
          ))}
        </div>
      )}
      {/* FarePolicy details */}
    </div>
  );
}

export default FarePolicy;
