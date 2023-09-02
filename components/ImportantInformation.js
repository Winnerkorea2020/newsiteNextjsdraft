import React from "react";

const ImportantInformation = () => {
  return (
    <div>
      <div className="w-full mx-auto tracking-tighter border-t ">
        <h3 className="uppercase my-5 text-xl font-bold text-red-600/60 sm:text-2xl lg:text-xl xl:text-2xl">
          &#8251; Important information
        </h3>
      </div>
      <div className="w-full">
        <div>
          <div>
            <h3 className="uppercase mb-5 text-xl font-bold text-gray-600 sm:text-2xl lg:text-xl xl:text-2xl">
              Membership Purchase Cancellation and Refund Regulations
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Refunds may or may not be small for mid-term refunds. Refund is
              not possible after checking the email attached with the file, so
              please keep this in mind and pay if you agree to the refund clause
            </p>
          </div>
          <div className="mt-8">
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Due to the nature of the product that cannot be recovered after
              providing it, videos of the search machine and techniques lecture
              will be processed by subtracting the following conversion amount
              from the payment amount at the time of refund.
            </p>
          </div>
          <div className="mt-8">
            <ul className=" list-decimal pl-5">
              <li className="mt-2">
                Product A 10% cancellation fee / Video of A technique lecture -
                KRW 770,000 / KRW 1.1 million for A search engine
              </li>
              <li className="mt-2">
                In the case of stock analysis products, the remaining amount
                will be refunded after being imposed after calculation (990,000
                won per month), including 10% of the cancellation fee.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="uppercase mb-5 text-xl font-bold text-gray-600 sm:text-2xl lg:text-xl xl:text-2xl">
              Important terms and conditions
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              The membership of this professional shall never be transferred or
              lent to another person and shall not be used commercially. If this
              expert's lectures and techniques are leaked, 50 million won will
              be compensated, and his membership will be immediately revoked
              without a refund. If you distribute the product's search formula,
              chart indicators, formulas, and techniques videos to a third party
              or online without permission, we will take all legal actions such
              as criminal proceedings and claims for damages, and may incur
              penalties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInformation;
