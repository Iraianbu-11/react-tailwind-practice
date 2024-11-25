import React from "react";

const Position = () => {
  return (
    <>
      <div className="p-10 space-y-2">
        <h1 className="text-xl text-center mb-4">
          Position and Display in Tailwind CSS
        </h1>
        <div className="relative w-1/2 h-24 bg-teal-300">
          <p>Relative Parent</p>
          <div className="absolute bottom-0 right-0 bg-red-600">
            Absolute Child
          </div>
        </div>
        <div className="relative w-1/2 h-24 bg-teal-300">
          <p>Relative Parent</p>
          <div className="absolute bottom-0 left-0 bg-red-600">
            Absolute Child
          </div>
        </div>
        <div className="relative w-1/2 h-24 bg-teal-300">
          <p>Relative Parent</p>
          <div className="absolute top-0 left-0 bg-red-600">Absolute Child</div>
        </div>
        <div className="relative w-1/2 h-24 bg-teal-300">
          <p>Relative Parent</p>
          <div className="absolute top-0 right-0 bg-red-600">
            Absolute Child
          </div>
        </div>
      </div>
      <h1 className="text-xl text-center mb-4">Display</h1>
      <div>
        When controlling the flow of text, using the CSS property
        <span class="inline bg-red-600">display: inline</span>
        will cause the text inside the element to wrap normally. 
        
        While using the property <span class="inline-block bg-red-600">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond
        its parent. Lastly, using the property{" "}
        <span class="block bg-red-600">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
    </>
  );
};

export default Position;
