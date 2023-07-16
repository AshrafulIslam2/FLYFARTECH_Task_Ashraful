import React from "react";

const FareSummary = ({ togglefareDetails, fareSummary }) => {
  return (
    <div>
      {" "}
      {togglefareDetails.detailsRender === "FareSummary" && (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-md">
                <table className="min-w-full text-left text-sm font-normal mx-4 rounded-md overflow-hidden">
                  <thead className="border-b bg-lime-500 font-meium  text-[14px]">
                    <tr>
                      <th scope="col" className="p-2">
                        #
                      </th>
                      <th scope="col" className="p-2">
                        Pax type
                      </th>
                      <th scope="col" className="p-2">
                        Base Fare(BDT)
                      </th>
                      <th scope="col" className="p-2">
                        Tax(BDT)
                      </th>
                      <th scope="col" className="p-2">
                        Pax Count
                      </th>
                      <th scope="col" className="p-2">
                        Service Fee
                      </th>
                      <th scope="col" className="p-2">
                        Sub total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fareSummary.map((data, Index) => (
                      <tr className="border-b bg-neutral-100 odd:bg-lime-300 text-gray-700 mx-[24px]">
                        <td className="whitespace-nowrap font-medium p-2">
                          {Index + 1}
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.PayxType}
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.BaseFare} TK
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.Tax} TK
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.PaxCount} TK
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.ServiceFee} TK
                        </td>
                        <td className="whitespace-nowrap  tex-[12px] p-2">
                          {data.SubTotal} TK
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FareSummary;
