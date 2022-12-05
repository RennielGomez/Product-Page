import React, { useState } from "react";
import Cart from "./Cart";

function Header() {

  const [visibility, setVisibility] = useState(false);

  return (
    <header className="flex items-center justify-evenly items-center drop-shadow-lg backdrop-blur-lg text-center">
      <nav className="flex items-baseline ">
        <span className="font-bold text-xl text-gray-800">sneakers</span>
        <ul className="flex font-normal px-5 ">
          <div>
            <li className="mx-1.5 text-xs text-slate-500 pb-4 hover:text-black hover:border-b-2 hover:border-b-orange-500 hover:transition-all">Collections</li>
          </div>
          <div>
            <li className="mx-1.5 text-xs text-slate-500 pb-4 hover:text-black hover:border-b-2 hover:border-b-orange-500 hover:transition-all">Men</li>
          </div>
          <div>
            <li className="mx-1.5 text-xs text-slate-500 pb-4 hover:text-black hover:border-b-2 hover:border-b-orange-500 hover:transition-all">Women</li>
          </div>
          <div>
            <li className="mx-1.5 text-xs text-slate-500 pb-4 hover:text-black hover:border-b-2 hover:border-b-orange-500 hover:transition-all">About</li>
          </div>
          <div>
            <li className="mx-1.5 text-xs text-slate-500 pb-4 hover:text-black hover:border-b-2 hover:border-b-orange-500 hover:transition-all">Contact</li>
          </ div>
        </ul>
      </nav>
      <div className="flex items-center">
        <button className="relative" onClick={() => { setVisibility(!visibility) }}>
          <img className="px-1 py-px w-6 h-4 mx-3 " src="/images/icon-cart.svg" alt="cart icon" />
          <Cart visible={visibility}/>
        </button>
        <img className="px-1 py-px w-8 h-8 mx-3 border-2 bg-white border-orange-500" src="/images/image-avatar.png" style={{ borderRadius: "50%" }} alt="avatar image" />
      </div>
    </header>
  )
}

export default Header