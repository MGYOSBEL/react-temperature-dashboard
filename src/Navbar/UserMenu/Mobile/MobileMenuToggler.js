import React from 'react';

const mobileMenuToggler = ({clicked}) => {
    return <>
        <div className="flex-shrink-0" onClick={clicked}>
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3" onClick={clicked}>
          <div className="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div className="text-sm font-medium leading-none text-gray-400">
            tom@example.com
          </div>
        </div>
    </>;
}

export default mobileMenuToggler;