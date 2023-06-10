import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = UseAuth();
    const onSubmit = data => {
        console.log(data);
        const addData = {
            class_name: data.class_name,
            class_image: data.class_image,
            instructor_name: data.instructor_name,
            instructor_email: data.instructor_email,
            instructor_image: data.instructor_image,
            available_seats: data.available_seats,
            price: data.price,
            class_status: "pending",
            enrolled_class: 0
        };
        axiosSecure.post("/data", addData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'Center',
                        icon: 'success',
                        title: 'Item Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }

    return (
        <div>
            <div className='text-center my-4'>
                <h2 className='text-2xl font-bold'>Add Class</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex ms-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("class_name", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image</span>
                        </label>
                        <input type='text' placeholder="Class Image"
                            {...register("class_image", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex ms-4 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Instructor  Name"
                            {...register("instructor_name", { required: true })}
                            className="input input-bordered w-full" defaultValue={user.displayName} />
                    </div>
                    <div className="form-control w-full mb-4 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="Class Image"
                            {...register("instructor_email", { required: true })}
                            className="input input-bordered w-full" defaultValue={user.email} />
                    </div>
                </div>
                <div className='flex ms-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Image</span>
                        </label>
                        <input type="text" placeholder="Instructor Image"
                            {...register("instructor_image", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats </span>
                        </label>
                        <input type="text" placeholder="Available Seats"
                            {...register("available_seats", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" placeholder="Price"
                        {...register("price", { required: true })}
                        className="input input-bordered w-full" />
                </div>
                <input type="submit" className='btn btn-sm mt-4' value="Add items" />
            </form>
        </div>
    );
};

export default AddClass;