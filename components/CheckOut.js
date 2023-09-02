import React from "react";
import { BiErrorAlt } from "react-icons/bi";

const CheckOut = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {/* Card Information */}
        <div className="space-y-4 col-span-2">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="pay-select"
            >
              Payemnt Method <span className="text-red-500">*</span>
            </label>
            <select
              id="pay-select"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
            >
              <option defaultValue="New Credit/debit Card">
                New Credit/debit Card
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="card-nr">
              Card Number <span className="text-red-500">*</span>
            </label>
            <input
              id="card-nr"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="card-expiry"
              >
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <input
                id="card-expiry"
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="card-cvc"
              >
                CVC <span className="text-red-500">*</span>
              </label>
              <input
                id="card-cvc"
                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                type="text"
                placeholder="CVC"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="card-name"
            >
              Name on Card <span className="text-red-500">*</span>
            </label>
            <input
              id="card-name"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="text"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="card-email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="card-email"
              className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
              type="email"
              placeholder="john@company.com"
            />
          </div>
        </div>
        {/* Pay */}
        <div className="mt-4 col-span-1 ">
          <div className="bg-gray-200/50 px-4 py-3 rounded">
            <div className="text-gray-600 font-medium tracking-tighter">
              <h3 className="text-lg">Plan Summary</h3>
            </div>
            <div className=" divide-y divide-gray-300 ">
              <div className="py-4 flex justify-between items-center gap-2">
                <div className="text-gray-700 font-medium">Price :</div>
                <div className="font-semibold text-gray-600 text-end">$125</div>
              </div>
              <div className="py-4 flex justify-between items-center gap-2">
                <div className="text-gray-700 font-medium">Period :</div>
                <div className="font-semibold text-gray-600 text-end">
                  1 Month
                </div>
              </div>
              <div className="py-4 flex justify-between items-center gap-2">
                <div className="text-gray-700 font-medium">
                  Shipping Method :
                </div>
                <div className="font-semibold text-gray-600 text-end">
                  E-Mail
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-500">
              <div className="my-8">
                <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                  Pay $172.00
                </button>
                <div className="mt-2 text-xs text-gray-500 italic text-center">
                  You'll be charged $125, including $48 for VAT in Korea
                </div>
              </div>

              <div className="flex items-center justify-start gap-2">
                <BiErrorAlt size={20} />
                <div className="text-xs text-gray-600">
                  Payments are protected with TLS encryption and Swiss privacy
                  laws
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
