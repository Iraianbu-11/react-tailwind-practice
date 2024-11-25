import React from "react";

const Sizing = () => {
  return (
    <>
      <h1 className="text-center text-xl">Sizing in Tailwind CSS</h1>
      <h1 className="text-center text-lg">Width</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <div className="bg-green-500 w-1">1</div>
        <div className="bg-green-500 w-10">10</div>
        <div className="bg-green-500 w-96">96</div>
      </div>

      <h1 className="text-center text-lg">Width Percentage</h1>
      <div className="bg-teal-300 p-7 mb-10">
        <div className="flex space-x-4 text-center">
          <div className="bg-green-500 w-1/2">1/2</div>
          <div className="bg-green-500 w-1/2">1/2</div>
        </div>

        <div className="flex space-x-4 mt-5 text-center">
          <div className="bg-green-500 w-1/3">1/3</div>
          <div className="bg-green-500 w-2/3">2/3</div>
        </div>
      </div>
      <h1 className="text-center text-lg">Max Width</h1>
      <div className="bg-teal-300 p-10 mb-10 max-w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        necessitatibus facilis nobis perspiciatis mollitia quaerat accusantium
        maiores laborum nisi aut quos animi expedita deleniti possimus,
        molestiae soluta dolorem obcaecati quisquam, similique autem placeat
        tempore non corporis. Minima quae ut corporis libero nesciunt voluptas
        pariatur, quia suscipit qui vitae possimus autem. Omnis doloremque
        temporibus, recusandae laborum inventore dicta amet officia asperiores
        quis ea fugit? Ipsum, itaque. Voluptatem, itaque voluptates. Atque iusto
        ad accusantium libero culpa in voluptatibus nam architecto eum nihil
        temporibus provident aspernatur tempore, inventore laboriosam reiciendis
        consequuntur dolorem sequi. Deserunt tenetur quisquam eum delectus
        commodi quibusdam officia! Nostrum, aperiam.
      </div>

      <h1 className="text-center text-lg">Width of Viewport</h1>
      <div className="bg-teal-300 p-10 mb-10 w-screen"></div>
      <div className="bg-teal-300 p-10 mb-10 w-fill"></div>

      <h1 className="text-center text-lg">Arbitrary Width</h1>
      <div className="bg-teal-300 p-10 mb-10 w-[250px]"></div>

      <h1 className="text-center text-lg">Height</h1>
      <div className="p-10 flex items-end">
        <div className="bg-indigo-300 h-24 ml-3">24px</div>
        <div className="bg-indigo-300 h-32 ml-3">32px</div>
        <div className="bg-indigo-300 h-64 ml-3">64px</div>
        <div className="bg-indigo-300 h-96 ml-3">96px</div>
      </div>

      <h1 className="text-center text-lg">Min Height</h1>
      <div className="bg-teal-300 p-10 mb-10 w-[250px]"></div>

      <h1 className="text-center text-lg">Full Screen height Height</h1>
      <div className="bg-teal-300 p-10 mb-10 h-screen"></div>
      <h1 className="text-center text-lg">Auto Width</h1>
      <div className="bg-teal-300 p-10 mb-10 w-auto"> Auto Width</div>
    </>
  );
};

export default Sizing;
