
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const Register = () => {
    const { CreateUser, updateUserProfile } = UseAuth();


    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        CreateUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUsers = { name: data.name, email: data.email, role:"student" }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUsers)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/")
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Elite Sports Academy | Register</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-4xl font-bold">SignUp now!</h1>
            </div>
            <div className="hero min-h-screen ">
                <div className="hero-content">
                    <div className="card px-10 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-500'>Photo  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' id="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-500'> Password  required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'> Password must be 6  character</p>}
                                {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500'> Password must be one uppercase one lowercase one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === document.getElementById("password").value,
                                })}
                                    className={`w-full px-3 py-2 border border-gray-200 rounded-none focus:outline-none focus:ring-1 ${errors.confirmPassword
                                        ? "focus:ring-red-500"
                                        : "focus:ring-warning"
                                        }`} />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm">Passwords do not match.</p>
                                )}
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                            <p className='text-center'><small> <Link to="/login">Already have an account</Link></small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;