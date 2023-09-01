import { navLinks } from "@/constant";
import Link from "next/link";

export default function NavList() {
  return (
    <div>
      <ul className="flex justify-between items-center w-full sm:w-auto md:gap-8">
        {navLinks.map((navlist, index) => (
          <li key={index} className="group inline-block relative w-full">
            <button className="text-gray-700 font-semibold  rounded inline-flex items-center">
              <span className="mr-1">{navlist.category}</span>
            </button>

            <div className="absolute -left-3 min-w-max hidden text-gray-700 z-40 border rounded bg-white group-hover:block">
              <ul className="flex flex-col sm:flex-row text-sm tracking-tighter">
                {navlist.items.map((items, subindex) => (
                  <li key={subindex} className="">
                    <Link
                      className="py-2 px-3 block whitespace-no-wrap"
                      href={`${items.url}`}
                    >
                      {items.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
