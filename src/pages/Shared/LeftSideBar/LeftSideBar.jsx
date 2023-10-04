import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="sticky top-4">
            <h2 className="text-xl font-semibold  text-deepDark mb-5">All Category</h2>
            <ul>
                {
                    categories.map(category => <li className="my-1 text-xl font-semibold text-lightDark" key={category.id}><NavLink className="inline-block py-5 px-8 w-full" to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                }
            </ul>
            <div>
                
            </div>
        </div>
    );
};

export default LeftSideBar;