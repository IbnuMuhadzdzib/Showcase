import React, { useEffect, useState } from "react";
import '../font.css'; 

export default function Navbar({ isWhite }) {
  return (
    <nav className="flex justify-center pt-6 fixed w-full z-40">
      <ul className="flex flex-row bg-white bg-opacity-5 backdrop-blur-sm w-fit py-1 px-1 rounded-full">
        {["Home", "About", "Courses", "Contact"].map((text, i) => (
          <li key={i}>
            <a
              href="#"
              className={`group relative inline-block py-2 px-5 hover:px-7 rounded-full transition-all text-lg font-athletics ${
                isWhite ? "text-white hover:bg-white hover:text-black" : "text-black hover:bg-gray-100"
              }`}
            >
              <span className="relative pl-4 group-hover:pl-6 transition-all duration-300 flex items-center">
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                    isWhite ? "bg-indigo-500" : "bg-indigo-500"
                  } scale-0 group-hover:scale-100 transition-transform duration-300`}
                ></span>
                {text}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
