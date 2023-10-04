import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
  const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Create User
        createUser(email, password)
        .then(result => {
          console.log(result.user);
          console.log("User Create Successfully");
        })
        .catch(error => {
          console.error(error.message)
        })
    }
    return (
        <div className="mt-12 mb-20">
        <Navbar></Navbar>
        <div className="max-w-3xl px-24 py-16 mx-auto rounded-md shadow-md bg-lightBg mt-20">
            <h2 className="text-deepDark text-4xl font-semibold text-center mb-12 pb-12 border-b-2">Login your account</h2>
        <form onSubmit={handleRegister} className="px-6">
        <div className="form-control">
          <label className="label">
            <span className="text-deepDark text-xl font-semibold mb-3">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter your name" className="text-base h-16 p-5 focus:outline-none text-[#9F9F9F] input input-bordered mb-6" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-deepDark text-xl font-semibold mb-3">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="Enter your photo URL" className="text-base h-16 p-5 focus:outline-none text-[#9F9F9F] input input-bordered mb-6" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-deepDark text-xl font-semibold mb-3">Email address</span>
          </label>
          <input name="email" type="email" placeholder="Enter your email address" className="text-base h-16 p-5 focus:outline-none text-[#9F9F9F] input input-bordered mb-6" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-deepDark text-xl font-semibold mb-3">Password</span>
          </label>
          <input name="password" type="password" placeholder="Enter your password" className="text-base h-16 p-5 focus:outline-none text-[#9F9F9F] input input-bordered mb-6" required />
        </div>
        <label className="flex gap-3 mb-6 cursor-pointer">
            <input type="checkbox"  className="checkbox rounded-md" />
            <p href="#" className=" text-lightDark text-base font-semibold "><span className="font-normal">Accept</span> Term & Conditions</p>
          </label>
        <div className="form-control">
          <button className="btn hover:bg-dragonBg bg-deepDark text-xl border-none font-semibold text-white normal-case h-16 mb-6" >Register</button>
        </div>
        <label className="text-center block">
            <span href="#" className=" text-lightDark text-base font-semibold ">Already Have An Account ? <Link to="/login" className="link link-hover  text-dragonBg">Login</Link></span>
          </label>
      </form>
        </div>
        </div>
    );
};

export default Register;