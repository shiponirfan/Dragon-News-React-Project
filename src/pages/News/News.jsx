import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const News = ({ news }) => {
  const { author, title, image_url, details, rating, total_view, _id } = news;
  return (
    <div className="border-lightBg border-2 rounded-md mb-8">
      <div className="flex items-center justify-between  bg-lightBg p-5">
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={author.img} />
          <div>
            <h3 className="text-deepDark text-base font-semibold">
              {author.name}
            </h3>
            <span className="text-lightDark text-sm">{author.published_date}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold  text-deepDark mb-5">
          {title}
        </h2>
        <img
          className="rounded-md mb-8"
          src={image_url}
          alt={title}
        />
        <p className="text-lightDark text-base">{`${details.slice(0, 250)}...`}</p>
        <Link to={`/newsdetails/${_id}`} className="text-base font-semibold text-[#FF8C47] py-3 block border-b-2 border-lightBg">Read More</Link>
      </div>
      <div className="flex items-center justify-between p-5 pt-0">
        <div className="flex items-center gap-3">
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="text-lightDark text-base font-medium mt-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEye className="text-2xl text-lightDark" />
          <span className="text-lightDark text-base font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};
News.propTypes = {
    news: PropTypes.object,
}
export default News;
