"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createArticle } from "../actions";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  const HandleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required");
      return;
    }

    try {
      // Attempt to create the article
      await createArticle(title, content);
      setError(null); // Reset error on success
      setTitle(""); // Clear form after successful submission
      setContent("");
    } catch (err) {
      console.log("Error creating article:", err); // Log the actual error
      setError("Failed to create article. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4 mb-10">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-300 to-slate-400 mb-4">
        Create a New Article
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full relative z-10 bg-opacity-50 max-w-2xl space-y-4 bg-gradient-to-br from-gray-600 via-slate-700 to-cyan-700 p-6 rounded-lg shadow-md"
      >
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <Input
            id="title"
            placeholder="Enter the article title"
            className="w-full bg-gray-700 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <Textarea
            id="content"
            placeholder="Enter the article content"
            className="w-full h-48 bg-gray-700 text-white"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          onClick={HandleModal}
          className="bg-blue-600 text-white rounded-md p-3 w-full h-12 hover:bg-blue-500"
        >
          Publish
        </button>
      </form>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ease-in">
          <div className="items-center justify-center bg-gradient-to-br from-fuchsia-600 to-gray-800 bg-opacity-45 w-full h-[300px] xl:h-[240px] xl:w-[700px] space-y-3 rounded-lg shadow-2xl shadow-red-500">
            <h1 className="text-center mt-2 font-bold text-4xl xl:text-6xl relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 ">
              ERROR MESSAGE
            </h1>
            <p className="xl:text-xl text-xl relative text-center z-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white font-semibold ">
              Unable to Create Article please try again later
            </p>
            <div
              onClick={() => HandleModal()}
              className="relative xl:top-10 top-20 cursor-pointer rounded-md bg-gradient-to-r from-purple-400 to-gray-600  h-10 w-28 p-1 items-center justify-center m-auto text-center border-2 border-lime-600 shadow-lg shadow-purple-500"
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateForm;
