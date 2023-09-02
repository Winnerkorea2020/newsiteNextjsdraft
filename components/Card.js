import { AiOutlineCheck } from "react-icons/ai";

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg">
        Best option for personal use & for your next project.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$29</span>
        <span className="text-gray-500 ">/month</span>
      </div>
      <ul className="mb-8 space-y-4 text-left text-gray-500">
        <li className="flex items-center gap-x-2">
          <AiOutlineCheck size={20} className="text-green-500 font-bold" />
          Individual configuration
        </li>
        <li className="flex items-center gap-x-2">
          <AiOutlineCheck size={20} className="text-green-500 font-bold" />
          Individual configuration
        </li>
        <li className="flex items-center gap-x-2">
          <AiOutlineCheck size={20} className="text-green-500 font-bold" />
          Individual configuration
        </li>
        <li className="flex items-center gap-x-2">
          <AiOutlineCheck size={20} className="text-green-500 font-bold" />
          Individual configuration
        </li>
      </ul>
    </div>
  );
};

export default Card;
