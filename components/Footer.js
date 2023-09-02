import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-white m-4">
      <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="#" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap tracking-tighter">
              TY-Play
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Notice
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023
          <Link href="https://prime-play.com/" className="hover:underline">
            TY-Play
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
