import React from "react";
import menuEntries from "../userMenuEntries";

const desktopUserMenu = () => {
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      {menuEntries.map((entry) => (
        <a
          href={entry.link}
          key={entry.label}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {entry.label}
        </a>
      ))}
    </div>
  );
};

export default desktopUserMenu;
