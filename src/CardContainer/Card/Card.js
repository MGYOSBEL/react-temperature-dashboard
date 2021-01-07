import React from "react";

const card = () => {
  return (
    <div class="">
      <div class="flex flex-row bg-gray-400 shadow-sm rounded-xl p-4">
        {/* <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
           // icon goes here
        </div> */}
        <div class="flex flex-col flex-grow ml-4">
          <div class="text-sm text-gray-500">New Clients</div>
          <div class="font-bold text-lg">190</div>
        </div>
      </div>
    </div>
  );
};

export default card;
