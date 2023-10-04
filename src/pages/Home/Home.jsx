import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";
import BreakingNews from "./BreakingNews";
import News from "../News/News";
import { useEffect, useState } from "react";

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('/news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
    },[])
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-16">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold  text-deepDark mb-5">Dragon News Home </h2>
                    {
                        news.map((news, idx)=> <News key={idx} news={news}></News>)
                    }
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;