
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register Here</h1>

                </div>
                <div className="card px-10  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered w-[250px]" />
                            {errors.name && <span className='text-red-500'>Name  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])/
                            })} name='password' placeholder="Password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p role="alert" className='text-red-500'> Password  required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'> Password must be 6  character</p>}
                            {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500'> Password must be one uppercase one lowercase one special character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmpassword", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])/
                            })} placeholder="Confirm password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p role="alert" className='text-red-500'> Password  required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-500'> Password must be 6  character</p>}
                            {errors.password?.type === 'pattern' && <p role="alert" className='text-red-500'> Password must be one uppercase one lowercase one special character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-500'>Photo  is required</span>}
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                        <p className='text-center'><small> <Link to="/login">Already have an account</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>




    );
};

export default Register;