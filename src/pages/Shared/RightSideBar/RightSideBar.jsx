import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideBar = () => {
  return (
    <div className="sticky top-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold  text-deepDark mb-5">
          Login With
        </h2>
        <button className="outline p-2 text-base font-medium text-lightDark rounded-md outline-1 w-full flex items-center justify-center gap-2 mb-2">
          <FaGoogle className="text-deepDark" /> Login with Google
        </button>
        <button className="outline p-2 text-base font-medium text-lightDark rounded-md outline-1 w-full flex items-center justify-center gap-2">
          <FaGithub className="text-deepDark" /> Login with Github
        </button>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold  text-deepDark mb-5">
          Find Us On
        </h2>
        <a
          href=""
          className="flex items-center rounded-t-md border-[#E7E7E7] border-2 p-4 text-base font-medium text-lightDark"
        >
          <FaFacebook className="mr-3 text-blue-600" /> Facebook
        </a>
        <a
          href=""
          className="flex items-center border-[#E7E7E7] border-x-2 p-4 text-base font-medium text-lightDark"
        >
          <FaTwitter className="mr-3 text-sky-400" /> Twitter
        </a>
        <a
          href=""
          className="flex items-center rounded-b-md border-[#E7E7E7] border-2 p-4 text-base font-medium text-lightDark"
        >
          <FaInstagram className="mr-3 text-fuchsia-600" /> Instagram
        </a>
      </div>
      <div className="mb-5 p-4 bg-lightBg">
        <h2 className="text-xl font-semibold  text-deepDark mb-5">Q-Zone</h2>
        <img src={qZone1} alt="qZone1" />
        <img src={qZone2} alt="qZone2" className="my-5" />
        <img src={qZone3} alt="qZone3" />
      </div>
      <div className="mb-5 py-16 px-10 text-white text-center bg-[url('assets/bg.png')]">
        <h2 className="text-3xl font-bold mb-5">Create an Amazing Newspaper</h2>
        <p className="mb-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="bg-dragonBg py-6 px-6 font-semibold text-xl">
        Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
