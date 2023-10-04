import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const Career = () => {
    return (
        <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 mt-16">
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold  text-deepDark mb-5">
          Career
          </h2>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </>
    );
};

export default Career;