import React from "react";

const BaggageDetail = ({ togglefareDetails, Baggage }) => {
  return (
    <div>
      {" "}
      {/* BAGGAGE details */}
      {togglefareDetails.detailsRender === "BAGGAGE" && (
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-md">
                  <table className="min-w-full text-left text-sm font-normal mx-4 rounded-md overflow-hidden">
                    <thead className="border-b bg-lime-400   font-meium  text-[14px]">
                      <tr>
                        <th scope="col" className="p-2">
                          #
                        </th>
                        <th scope="col" className="p-2">
                          Baggage
                        </th>
                        <th scope="col" className="p-2">
                          Check In
                        </th>
                        <th scope="col" className="p-2">
                          Cabin
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Baggage.map((data, Index) => (
                        <tr className="border-b  odd:bg-lime-200 even:bg-lime-100 text-black mx-[24px]">
                          <td className="whitespace-nowrap font-medium p-2">
                            {Index + 1}
                          </td>
                          <td className="whitespace-nowrap  tex-[12px] p-2">
                            {data.typeofRefund}
                          </td>
                          <td className="whitespace-nowrap  tex-[12px] p-2">
                            {data.CheckIm} KG
                          </td>
                          <td className="whitespace-nowrap  tex-[12px] p-2">
                            {data.Cabin}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* BAGGAGE details */}
    </div>
  );
};

export default BaggageDetail;
