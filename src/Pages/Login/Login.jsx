import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Here</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

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
                            <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className='text-center'><small> <Link to="/register">New To Elite Sports Academy</Link></small></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;