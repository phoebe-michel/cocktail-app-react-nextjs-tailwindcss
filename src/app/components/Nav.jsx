import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-10 w-screen text-white bg-[#333]/[0.2] shadow-xl">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center text-base">
          <div className="logo py-5 text-2xl font-semibold text-white cursor-pointer">
            C&C
          </div>
          <ul className="flex">
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">Home</li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">
              Categories
            </li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">
              My Recipes
            </li>
            <li className="p-5 hover:text-[#ff0033] cursor-pointer">Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
