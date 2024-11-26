import React from "react";

const Breakpoints = () => {
  return (
    <>
      <h1 className="text-center text-xl my-3">Breakpoints in Tailwind CSS</h1>
      <h1 className="text-center text-xl my-3">Adjust the screen size to see changes</h1>
      <div className="flex justify-center min-h-5">
        <div className="bg-black p-10 w-[100px] h-[100px] sm:bg-blue-500 md:bg-pink-500 lg:bg-indigo-500 xl:bg-red-500"></div>
      </div>
    </>
  );
};

export default Breakpoints;
