import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../useContex/FormContext/AuthContex";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const Register = () => {
  const { handleRegister, handleSigninGoogle } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let { name, email, image, password } = data;
    let img = image[0];
    const formdata = new FormData();
    formdata.append("image", img);
    const myImage = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBD_KEY}`,
      formdata
    );
    let fulUrl = myImage?.data?.data?.display_url;
    handleRegister(email, password)
      .then(
        () => (
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: fulUrl,
          }),
          toast.success("register succssfull")
        )
      )
      .catch((e) => toast.error(e.message));
  };
  let handleGoogle = () => {
    handleSigninGoogle()
      .then(() => toast.success("Google resister Successfull"))
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="m-auto flex items-center justify-center my-7 ">
      <div className="card  max-w-sm shrink-0 shadow-2xl">
        <div className="card-body m-auto flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="capitalize text-[22px] font-bold mb-5 bg-linear-to-r from-[#F07048] via-purple-500 to-[#F07048] bg-clip-text text-transparent">
              Please a create account
            </h1>
            <label className="label text-white">Name</label>
            <input
              className="input  outline-0 "
              placeholder="Your Name"
              {...register("name", { required: "please wright your name" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="file-input mt-5 file-input-warning flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-medium pl-2">Upload Image</span>
              <input type="file" className="hidden" {...register("image")} />
            </label>

            <label className="label text-white">Email</label>
            <input
              type="email"
              className="input  outline-0 "
              placeholder="Email"
              {...register("email", { required: "your email is requred" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label text-white">Password</label>
            <input
              type="password"
              className="input  outline-0 "
              name="password"
              placeholder="Password"
              {...register("password", { required: "create strong password" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="mt-3">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-linear-to-r from-[#F07048] via-purple-500 to-[#F07048] text-[16px] text-white font-semibold mt-4 w-full">
              Register
            </button>
            <button
              type="button"
              className="btn bg-white text-black w-full mt-3 border-[#e5e5e5]"
              onClick={handleGoogle}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="mt-4 text-yellow-400">
              Opps! i Have a Account?{" "}
              <Link to={"/login"} className="text-blue-400">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
