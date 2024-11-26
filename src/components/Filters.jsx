import React from "react";
import Cat from "../assets/cat.jpg";
const Filters = () => {
  return (
    <>
      <h1 className="text-center text-xl">Filters in Tailwind CSS</h1>
      <h1 className="text-center text-xl my-5">Brightness</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] brightness-0"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] brightness-50"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] brightness-75"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] brightness-100"
        />
      </div>
      <h1 className="text-center text-xl my-5">Contrast</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] contrast-0"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] contrast-50"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] contrast-75"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] contrast-100"
        />
      </div>
      <h1 className="text-center text-xl my-5">Grayscale</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px]"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] grayscale"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] invert"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] sepia"
        />
      </div>
      <h1 className="text-center text-xl my-5">Hue Rotation</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] hue-rotate-0"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] hue-rotate-60"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] hue-rotate-90"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] hue-rotate-180"
        />
      </div>
      <h1 className="text-center text-xl my-5">Saturation</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] saturate-50"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] saturate-100"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] saturate-150"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] saturate-200"
        />
      </div>

      <h1 className="text-center text-xl my-5">Blur</h1>
      <div className="flex space-x-3 justify-center">
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] blur-sm"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] blur-md"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] blur-lg"
        />
        <img
          src={Cat}
          alt=""
          srcset=""
          className="w-[300px] h-[300px] blur-xl"
        />
      </div>

    </>
  );
};

export default Filters;
