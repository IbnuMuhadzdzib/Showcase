import React from "react";
import '../font.css'; 

export default function Navbar() {
  return (
    <nav className="flex justify-center pt-6 fixed w-full z-40">
      <ul className="flex flex-row backdrop-blur-xs w-fit py-1 px-1 rounded-full">
        {["Home", "About", "Courses", "Contact"].map((text, i) => (
          <li key={i}>
            <a
              href="#"
              className="group relative inline-block py-2 px-5 hover:px-7 rounded-full hover:bg-gray-100 transition-all text-black text-lg font-athletics"
            >
              <span className="relative pl-4 group-hover:pl-6 transition-all duration-300 flex items-center">
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 
                  scale-0 group-hover:scale-100 transition-transform duration-300"
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
