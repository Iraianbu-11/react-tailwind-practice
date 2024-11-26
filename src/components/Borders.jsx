import React from "react";

const Borders = () => {
  return (
    <>
      <h1 className="text-center text-xl">Borders in Tailwind CSS</h1>
      <div className="border-2 ml-96 mx-10 mb-5  p-10 h-[900px] w-1/2 text-center border-green-500">
        <div className="border-4 h-[100px] border-black"> All Border</div>
        <div className="border-t-2 mt-5 h-[100px] border-black">Top Border</div>
        <div className="border-b-2 mt-5 h-[100px] border-black">
          {" "}
          Bottom Border
        </div>
        <div className="border-x-2 mt-5 h-[100px] border-black">
          Border for X axis
        </div>
        <div className="border-y-2 mt-5 h-[100px] border-black">
          Bottom for Y axis
        </div>
        <div className="border-l-2 mt-5 h-[100px] border-black">
          Left Border
        </div>
        <div className="border-r-2 mt-5 h-[100px] border-black">
          Right Border
        </div>
      </div>
      <h1 className="text-center text-xl">Border Radius</h1>
      <div className="border-2 ml-96 border-red-700 w-1/2 h-84">
        <div className="w-96 m-3 p-5 bg-black rounded"></div>
        <div className="w-96 m-3 p-5 bg-black rounded-none"></div>
        <div className="w-96 m-3 p-5 bg-black rounded-sm"></div>
        <div className="w-96 m-3 p-5 bg-black rounded-md"></div>
        <div className="w-96 m-3 p-5 bg-black rounded-lg"></div>
        <div className="w-96 m-3 p-5 bg-black rounded-xl"></div>
      </div>
    </>
  );
};

export default Borders;
