import React from 'react';
import menuEntries from '../userMenuEntries';

const mobileUserMenu = () => {
    return (
        <div className="mt-3 px-2 space-y-1">
          {
          menuEntries.map(entry => 
          <a
            href={entry.link}
            key={entry.label}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
            {entry.label}
          </a>
          )
          }
        </div>

    );
}

export default mobileUserMenu;