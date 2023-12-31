import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import NavList from "./NavList";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3">
        <Logo />
        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <NavList />
        </nav>

        <div className="relative mt-6 max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
}
