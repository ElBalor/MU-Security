"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/design-g.webp",
    quote: "MU Security will be bring it's own AI soon",
    name: "Eric Yaka",
  },
  {
    image: "/images/custom-2.jpeg",
    quote: "MU Security will be bring it's Magazines",
    name: "Mfon Umana",
  },

  {
    image: "/images/custom-3.jpeg",
    quote: "Updates and more Contents will be brought soon enough",
    name: "Daniel Umana",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4  mx-auto relative z-10  w-full ">
        <div className="text-4xl underline py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-cyan-300 via-purple-400 to-gray-800/[0.89]  bg-opacity-50">
          Mu Updates <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          More of Mu Security will be coming soon. <br /> Update will be coming
          soon
        </p>
        <div className="md:flex items-center justify-center px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center  hover:scale-125 hover:duration-500 hover:ease-in-out justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
