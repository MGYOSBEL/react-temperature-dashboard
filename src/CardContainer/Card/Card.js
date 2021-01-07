import React from "react";

const card = ({data}) => {
  const temperatureHistory = data[1];
  const nodeName = data[0];
  const sortedHistory = temperatureHistory.sort((a,b) => b.timestamp - a.timestamp);
  const latestTemperature = sortedHistory[0].value;

  return (
    <div className="">
      <div className="flex flex-row bg-gray-400 shadow-sm rounded-xl p-4">
        {/* <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
           // icon goes here
        </div> */}
        <div className="flex flex-col flex-grow ml-4">
          <div className="text-sm text-gray-500 capitalize">{nodeName}</div>
          <div className="font-bold text-lg">{latestTemperature}&deg;C </div>
        </div>
      </div>
    </div>
  );
};

export default card;
