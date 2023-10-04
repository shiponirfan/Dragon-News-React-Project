import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const news = useLoaderData();
  const newsId = useParams();
  const getId = news.find(singleNews => singleNews._id.includes(newsId.id));
  const { title, image_url, details, category_id} = getId;
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 mt-16">
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold  text-deepDark mb-5">
          Dragon News
          </h2>
          <div className="p-7 border-lightBg border-2 rounded-md mb-8">
          <img className="rounded-md w-full mb-5" src={image_url} />
          <h2 className="text-2xl font-bold  text-deepDark mb-4">{title}</h2>
          <p className="text-lightDark text-base mb-8">{details}</p>
          <Link to={`/category/${category_id}`}><button className="flex items-center gap-2 py-3 px-7 text-white hover:bg-red-600 bg-dragonBg"><FaArrowLeft/> All news in this category</button></Link>
          </div>
          <div>
          <h2 className="text-2xl font-semibold  text-deepDark mb-5">
          Editors Insight
          </h2>
          <div>
            
          </div>
          </div>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
