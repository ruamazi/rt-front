import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { options, rtNewsURL } from "../../constants";

const Home = () => {
 const [news, setNews] = useState("");
 const [error, setError] = useState(false);
 const [isLoading, setIsLoading] = useState(true);

 const fetchNews = async () => {
  try {
   setError(false);
   const resp = await fetch(rtNewsURL, options);
   if (!resp.ok) {
    setError(true);
    return;
   }
   const data = await resp.json();
   setNews(data.results);
  } catch (error) {
   setError(true);
   console.log(error);
  } finally {
   setIsLoading(false);
  }
 };

 useEffect(() => {
  fetchNews();
 }, []);

 if (error) {
  return <p className="text-red-500">فشل تحميل الأخبار</p>;
 }

 return (
  <div className="flex flex-col gap-6 justify-center items-center my-10 px-2">
   {news && news.map((each, i) => <Card article={each} key={i} />)}

   {isLoading && <Loader />}
  </div>
 );
};

export default Home;
