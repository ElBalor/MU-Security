import React from "react";
import { books } from "../../app/data";
import Image from "next/image";

const Books = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center p-4 space-y-8 xl:space-y-4 ">
      {books.map((book, index) => (
        <div
          key={index}
          className="w-full max-w-md sm:max-w-sm  h-[550px] flex flex-col items-center bg-gradient-to-br from-indigo-600 via-purple-800 to-puple-900 shadow-2xl rounded-3xl p-6 m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <Image
            src={book.cover}
            alt={book.title}
            className="w-full h-[380px] object-cover rounded-lg"
            width={300}
            height={300}
          />
          <h2 className="mt-4 text-lg font-bold">{book.title}</h2>
          <a
            href="pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white font-medium rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 p-3 w-36 sm:w-40 md:w-44 text-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:from-yellow-500 hover:to-orange-500"
          >
            Read Book
          </a>
        </div>
      ))}
    </div>
  );
};

export default Books;
