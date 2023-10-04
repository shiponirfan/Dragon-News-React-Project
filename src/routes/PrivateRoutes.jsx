import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Blocks } from "react-loader-spinner";
import PropTypes from "prop-types";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoutes;