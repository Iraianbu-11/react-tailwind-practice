import React from "react";

const Container = () => {
  return (
    <>
      <h1 className="text-xl text-center">Spacing in Tailwind CSS</h1>

      <h1>Margins</h1>
      <div className="m-3 bg-orange-400">Margin All Around</div>
      <div className="mx-4 bg-orange-400">Margin from X axies</div>
      <div className="my-4 bg-orange-400">Margin from Y axies</div>
      <div className="mt-6 bg-orange-400">Margin Top</div>
      <div className="ml-2 bg-orange-400">Margin Left</div>
      <div className="mr-4 bg-orange-400">Margin Right</div>
      <div className="mb-8 bg-orange-400">Margin Bottom</div>
      <br />
      <hr />
      <br />
      <h1>Arbitrary Spacing</h1>
      <div className="p-[2rem] bg-slate-600">Margin All around</div>
      <br />
      <hr />
      <br />
      <h1>Padding</h1>
      <div className="p-4 bg-lime-100">Padding All Around</div>
      <div className="px-4 bg-lime-200">Padding X axies</div>
      <div className="py-4 bg-lime-300">Padding Y axies</div>
      <div className="pl-4 bg-lime-400">Padding Left</div>
      <div className="pr-4 bg-lime-500">Padding Right</div>
      <div className="pt-4 bg-lime-600">Padding Top</div>
      <div className="pb-4 bg-lime-700">Padding Bottom</div>
      <div className="p-[80px] bg-lime-800">Padding Arbitrary</div>
      <br />
      <hr />
      <br />
      <h1>Space between X</h1>
      <div className="flex space-x-2">
        <div className="p-3 bg-purple-300">A</div>
        <div className="p-3 bg-purple-300">B</div>
        <div className="p-3 bg-purple-300">C</div>
      </div>
      <br />
      <hr />
      <br />
      <h1>Space between Y</h1>
      <div className="flex-col space-y-10">
        <div className="p-3 bg-purple-300">A</div>
        <div className="p-3 bg-purple-300">B</div>
        <div className="p-3 bg-purple-300">C</div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
};

export default Container;
