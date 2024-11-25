import React from "react";

const Typography = () => {
  return (
    <>
      <h1 className="text-center text-xl">Typography in Tailwind CSS</h1>
      <h1 className="text-center text-lg">Font Size</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="text-xs">Tailwind CSS</p>
        <p className="text-sm">Tailwind CSS</p>
        <p className="text-base">Tailwind CSS</p>
        <p className="text-lg">Tailwind CSS</p>
        <p className="text-xl">Tailwind CSS</p>
        <p className="text-2xl">Tailwind CSS</p>
        <p className="text-3xl">Tailwind CSS</p>
      </div>

      <h1 className="text-center text-lg">Font Family</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="font-sans">Tailwind CSS</p>
        <p className="font-serif">Tailwind CSS</p>
        <p className="font-mono">Tailwind CSS</p>
      </div>

      <h1 className="text-center text-lg">Font Weight</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="font-thin">Tailwind CSS</p>
        <p className="font-light">Tailwind CSS</p>
        <p className="font-extralight">Tailwind CSS</p>
        <p className="font-normal">Tailwind CSS</p>
        <p className="font-medium">Tailwind CSS</p>
        <p className="font-bold">Tailwind CSS</p>
        <p className="font-semibold">Tailwind CSS</p>
        <p className="font-extrabold">Tailwind CSS</p>
        <p className="font-black">Tailwind CSS</p>
      </div>


      <h1 className="text-center text-lg">Letter Spacing</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="tracking-tight">Tailwind CSS</p>
        <p className="tracking-tighter">Tailwind CSS</p>
        <p className="tracking-normal">Tailwind CSS</p>
        <p className="tracking-wider">Tailwind CSS</p>
        <p className="tracking-widest">Tailwind CSS</p>
      </div>


      <h1 className="text-center text-lg">Text Alignment</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="text-left">Tailwind CSS</p>
        <p className="text-center">Tailwind CSS</p>
        <p className="text-right">Tailwind CSS</p>
      </div>


      <h1 className="text-center text-lg">Text Decoration</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="underline">Tailwind CSS</p>
        <p className="no-underline">Tailwind CSS</p>
        <p className="line-through">Tailwind CSS</p>
        <p className="overline">Tailwind CSS</p>
      </div>


      <h1 className="text-center text-lg">Text Transform</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <p className="uppercase">Tailwind CSS</p>
        <p className="lowercase">Tailwind CSS</p>
        <p className="normal-case">Tailwind CSS</p>
        <p className="capitalize">Tailwind cSS</p>
      </div>
    </>
  );
};

export default Typography;
