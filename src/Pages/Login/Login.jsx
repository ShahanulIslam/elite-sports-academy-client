import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn } = UseAuth()

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in  Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
                reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    // toggle show password
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Elite Sports Academy | Login</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login Here</h1>

                </div>
                <div className="card px-10 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered w-[250px]" />
                            {errors.email && <span className='text-red-500'>Email  is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} {...register("password")} name='password' placeholder="Password" className="input input-bordered" />
                            <svg
                                onClick={toggleShowPassword}
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-12 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                                fill={showPassword ? "none" : "currentColor"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                />
                            </svg>
                        </div>
                        <div className="form-control mt-4">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className='text-center'><small> <Link to="/register">New To Elite Sports Academy</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    );
};

export default Login;