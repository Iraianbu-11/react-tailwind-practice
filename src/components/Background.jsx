import React from "react";
import Cat from "../assets/cat.jpg";

const Background = () => {
  return (
    <>
      <h1 className="text-center text-xl">
        Background Shadows in Tailwind CSS
      </h1>
      <div
        className="h-[300px] w-1/2 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${Cat})` }}
      ></div>
      <h1 className="text-center text-xl">Shadows</h1>
      <div className="flex flex-wrap">
        <div className="w-[400px] p-3 mt-10 ml-3 shadow-md">Shadow Medium</div>
        <div className="w-[400px] p-3 mt-10 ml-3 shadow-lg">Shadow Large</div>
        <div className="w-[400px] p-3 mt-10 ml-3 shadow-xl">
          Shadow Extra Large
        </div>
        <div className="w-[400px] p-3 mt-10 ml-3 shadow-inner">
          Inner Shadow
        </div>
        <div className="w-[400px] p-3 mt-10 ml-3 shadow-lg shadow-violet-900">
          Inner Shadow
        </div>
      </div>
      <h1 className="text-center text-xl mt-3">Gradients</h1>
      <div className="h-32 p-10 bg-gradient-to-r from-indigo-400 to-pink-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        obcaecati ex eos amet corrupti voluptas facilis ullam ea saepe qui
        aperiam deserunt impedit similique repellat ab voluptatum, assumenda
        autem sint?
      </div>
    </>
  );
};

export default Background;
