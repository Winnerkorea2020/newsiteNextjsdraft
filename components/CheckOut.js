import React from "react";

const CheckOut = () => {
  return (
    <div>
      <div className="space-y-4">
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
          <label className="block text-sm font-medium mb-1" htmlFor="card-name">
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

      <div className="mt-6">
        <div className="mb-4">
          <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
            Pay $172.00
          </button>
        </div>
        <div className="text-xs text-gray-500 italic text-center">
          You'll be charged $125, including $48 for VAT in Korea
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
