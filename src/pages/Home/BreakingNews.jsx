import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="p-4 mb-5 bg-lightBg flex">
      <button className="bg-dragonBg py-3 mr-4 px-6 font-medium text-xl text-white">
        Latest
      </button>
      <Marquee className="text-lg font-semibold text-deepDark">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
