import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { options, rtArticleURL } from "../../constants";

const Article = () => {
 const [article, setArticle] = useState("");
 const [error, setError] = useState(false);
 const [isLoading, setIsLoading] = useState(true);
 const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
 const url = queryParams.get("url");

 const fetchSingleArticle = async () => {
  const endpoint = `${rtArticleURL}${url}`;
  setError(false);
  try {
   setIsLoading(true);
   const resp = await fetch(endpoint, options);
   const data = await resp.json();
   if (!resp.ok || !data[0].title) {
    setError(true);
    return;
   }
   setArticle(data[0]);
  } catch (error) {
   setError(true);
   console.log(error);
  } finally {
   setIsLoading(false);
  }
 };

 useEffect(() => {
  fetchSingleArticle();
 }, []);

 return (
  <article className="flex items-center justify-center flex-col text-center mt-8 gap-2 p-4 max-w-5xl">
   <Link to={"/"} className={`${isLoading ? "hidden" : ""} flex w-full mb-2`}>
    <button className="py-1 px-2 bg-blue-800 rounded-xl cursor-pointer hover:bg-blue-600">
     الصفحة الرئيسية
    </button>
   </Link>

   {isLoading && <Loader />}
   {error && <p className="text-red-500">فشل تحميل الأخبار</p>}
   {article.title && (
    <>
     <h1 className="text-3xl text-blue-400">{article.title}</h1>
     <p className="text-xl text-right">{article.summary}</p>
     <img className="my-3 w-[50%]" src={article.img} alt="image" />
     <p className="text-right text-xl bg-slate-700 p-2 rounded-2xl text-shadow">
      {article.content}
     </p>
     <span className="text-left mt-2.5">{article.date}</span>
    </>
   )}
  </article>
 );
};

export default Article;
