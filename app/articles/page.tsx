import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import readUserSession from "@/lib/action";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import Mfon from "../../public/person.jpg";
import ArticleNav from "../../components/HomeNav";
import StarsCanvas from "@/components/StarCanvas";

const page = async () => {
  const { data } = await readUserSession();
  if (!data.user) {
    redirect("/auth");
  }

  const articleColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-red-100",
    "bg-teal-100",
    "bg-indigo-100",
  ];

  const articles = [
    {
      author: "Mfon Umana",
      content:
        "Curbing Electoral Violence: Myth or Reality? Democracy, while praised as an ideal form of governance, can sometimes lead to instability and electoral violence, particularly in highly competitive elections. In Nigeria, electoral violence has been a recurring issue, with incidents ranging from the Western Region crisis in 1962 to the deadly post-election violence of 2011.",
      likes: 24,
    },
    {
      author: "Mfon Umana",
      content:
        "August Break Protest in Nigeria The August Break is traditionally a period of reduced rainfall in southern Nigeria, marked by cultural and educational activities. However, in 2024, this period was overshadowed by a nationwide protest against the government, known as the END BAD GOVERNMENT IN NIGERIA 2024 movement. The protest also highlighted deep-seated regional and ethnic divisions within the country.",
      likes: 16,
    },
    {
      author: "Mfon Umana",
      content:
        "Citizens Obligation Toward Breaking the Crime Triangle in Nigeria The primary duty of the Nigerian government is to ensure the security and welfare of its people, as stated in Section 14(2b) of the 1999 Constitution. To fulfill this responsibility, the government relies on specialized agencies to combat crime. However, no nation can single-handedly manage crime; citizen involvement is essential.",
      likes: 10,
    },
    {
      author: "Mfon Umana",
      content:
        '"Community-Based Security" MUU-SECURITY believes in the power of community. By working closely with local communities, we are able to tailor our security solutions to meet the unique needs of each area. Our community-based approach ensures that everyone has a role to play in maintaining safety and security. Together, we can build stronger, safer communities.',
      likes: 8,
    },
    {
      author: "Mfon Umana",
      content:
        '"Empowering Through Education" Education is key to improving security. MUU-SECURITY is committed to providing high-quality security education that empowers individuals and organizations to take control of their security. Our training programs are designed to be practical, relevant, and accessible to all. Learn with us and be part of the security solution.',
      likes: 12,
    },
  ];

  return (
    <>
      <StarsCanvas />
      <ArticleNav />
      <div className="min-h-full w-full flex flex-col items-center justify-center space-y-8 p-6 mt-20 bg-gradient-to-br from-gray-700 via-gray-600 to-black">
        <h1 className="text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-300 to-blue-400 mb-8">
          Articles
        </h1>

        {/* Article Creation Form */}
        <div className="w-full flex flex-col items-center space-y-4 mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-300 to-slate-400 mb-4">
            Create a New Article
          </h2>
          <form className="w-full relative z-0 bg-opacity-50 max-w-2xl space-y-4 bg-gradient-to-br from-gray-600 via-slate-700 to-cyan-700 p-6 rounded-lg shadow-md">
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
              />
            </div>
            <button className="bg-blue-600 text-white rounded-md p-3 w-full h-12 hover:bg-blue-500">
              Publish
            </button>
          </form>
        </div>

        {/* Existing Articles */}
        <div className="space-y-6 w-full px-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-start space-x-4`}
            >
              {index % 2 === 0 && (
                <Image
                  src={Mfon}
                  alt={article.author}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div
                className={`max-w-2xl ${
                  articleColors[index % articleColors.length]
                } p-5 rounded-lg shadow-md`}
              >
                <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-slate-600 mb-2">
                  {article.author}
                </p>
                <p className="text-md text-gray-900 mb-4">{article.content}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 text-blue-600">
                    <AiOutlineLike className="text-xl" />
                    <span>{article.likes} Likes</span>
                  </button>
                  <button className="text-blue-600 hover:underline">
                    Comment
                  </button>
                </div>
              </div>
              {index % 2 !== 0 && (
                <Image
                  src={Mfon}
                  alt={article.author}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
