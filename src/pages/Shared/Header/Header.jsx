import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
    return (
        <div className="pt-12 mb-8 text-center">
            <Link to="/"><img className="mb-5 mx-auto" src={logo} alt="logo" /></Link>
            <h4 className="mb-3 text-lg text-lightDark">Journalism Without Fear or Favour</h4>
            <p className="text-xl font-medium text-lightDark">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;