"use client";
import useTypeword from "@/hooks/useTypeword";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const text = useTypeword("hyo.", 60);
  const [activeLink, setActiveLink] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleLinkClick = (route: string) => {
    setActiveLink(route);
    setToggleHeader(false);
    const section = document.getElementById(route.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkIsActive = (route: string) => activeLink === route;

  return (
    <header className="flex flex-col justify-between items-center mx-auto w-full px-8 top-0 sm:h-[12vh] md:h-[12vh] lg:h-[10vh] backdrop-blur-sm md:flex-row sticky z-30 pb-[3px] selection:bg-blueLight_color">
      <div className="w-full justify-between flex md:flex-col md:justify-between">
        <Link href="/">
          <span className="text-2xl font-light font-shrik text-blue_color pl-2">
            {text}
          </span>
        </Link>
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setToggleHeader(!toggleHeader)}
        >
          {toggleHeader ? "close" : "open"}
        </button>
      </div>
      <nav
        className={`absolute top-[5vh] transition-all duration-300 ease-in-out md:static md:opacity-100 left-0 w-full md:w-fit  ${
          toggleHeader
            ? "top-[2vh] opacity-100 md:top-0 pointer-events-auto"
            : "top-[-200vh] opacity-0  pointer-events-none lg:pointer-events-auto md:pointer-events-auto"
        } font-dohyeon text-gray-600 `}
      >
        <ul
          className={`flex flex-col gap-4 py-5 text-base text-center md:flex-row md:gap-7 md:text-lg bg-none ${
            toggleHeader ? "bg-white opacity-90" : ""
          } md:bg-transparent`}
        >
          {["about", "pray", "people"].map((route) => (
            <li key={route}>
              <a
                href={`#${route}`}
                className={
                  linkIsActive(`#${route}`)
                    ? "text-blue_color"
                    : "hover:text-blue_color"
                }
                onClick={() => handleLinkClick(`#${route}`)}
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
