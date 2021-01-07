import React from "react";

const navigationItem = ({label, link}) => {
  return (
    <a
      href={link}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 block md:inline py-2 rounded-md text-base md:text-sm font-medium"
    >
      {label}
    </a>
  );
};

export default navigationItem;
