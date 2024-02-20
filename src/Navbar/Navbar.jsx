import React from "react";
import logo from "../Navbar/logowhy.png"

function Navbar() {
  

  return (
    <div className="">
      <div className="h-full min-width: 1px; bg-[#FF9315] flex justify-between gap-5 py-5 pl-5 ">
        <div className="flex gap-5 py-2">
        <img src={logo} alt="image" className="mt-10 h-[36px] w-[36px]"/>


          <p className="text-white text-xl font-bold mt-10 ">Why Global Services</p>
          
        </div>
        {/* <div className="flex flex-col justify-between gap-2 pr-5 py-2 font-bold text-white">
          <p>No.9/10,4th floor casa Major Road,</p>
          <p>Elango Apartment,Egmore,</p>
          <p>Chennai-600008, Mob:7299119900</p>
          <p>why@whyglobalservices.com</p>
          
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
