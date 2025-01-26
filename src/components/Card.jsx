import { Link } from "react-router-dom";

const Card = ({ article, index }) => {
 if (!article) return;
 return (
  <div
   className="flex flex-col py-3 rounded-2xl justify-center items-center relative bg-slate-800/40 p-1 gap-1"
   key={index}
  >
   <h1
    dir="rtl"
    className="md:text-[1.5rem] text-[1.3rem] title title text-right text-blue-200 text-shadow"
   >
    {article.title}
   </h1>
   <img className="w-[70%] rounded-2xl" src={article.image} alt="picture" />
   <Link
    className="absolute bottom-4 right-20"
    to={`/article?url=${article.url}`}
   >
    <button className="bg-blue-900 py-1 px-3 rounded-md cursor-pointer hover:bg-blue-700">
     اقرأ المزيد
    </button>
   </Link>
  </div>
 );
};

export default Card;
