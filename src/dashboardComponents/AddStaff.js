import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';

const AddStaff = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { data: busses, isLoading } = useQuery({
        queryKey: ['bus'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/busName`);
            const data = await res.json();
            return data;
        }
    })

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleAddStaff = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const staff = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        bus: data.bus,
                        image: imgData.data.url,
                        role: data.role
                    }

                    // save staff information to the database
                    fetch(`http://localhost:5000/staff`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `barer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(staff)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/manage-staff')
                        })
                }
            })
    }

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>
    }
    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className='text-2xl text-center'>Sign up</h2>
            <form onSubmit={handleSubmit(handleAddStaff)}>

                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Name</span> </label>
                    <input {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} placeholder="Your name" className="input input-bordered w-full" type="text" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-600'>Name is required</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"> <span className="Your email">Email</span> </label>
                    <input {...register("email", { required: "Email address is required" })} placeholder="First name" className="input input-bordered w-full" type="text" />
                    {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Contact No.</span> </label>
                    <input {...register("phone", { required: true })} aria-invalid={errors.phone ? "true" : "false"} placeholder="Your number" className="input input-bordered w-full" type="number" />
                    {errors.phone?.type === 'required' && <p role="alert" className='text-red-600'>Contact number is required</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Photo</span> </label>
                    <input {...register("image", { required: true })} aria-invalid={errors.image ? "true" : "false"} placeholder="Staff photo" className="input input-bordered w-full" type="file" />
                    {errors.image?.type === 'required' && <p role="alert" className='text-red-600'>Photo is required</p>}
                </div>


                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Which bus</span> </label>
                    <select {...register("bus", { required: true })} className="select input-bordered">
                        <option disabled selected>Pick one</option>
                        {
                            busses?.map(bus => <option key={bus._id} value={bus?.busName}>{bus?.busName}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Select position</span> </label>
                    <select {...register("role", { required: true })} className="select input-bordered">
                        <option selected>Driver</option>
                        <option selected>Conductor</option>
                        <option selected>Helper</option>
                        <option selected>Others</option>
                    </select>
                </div>

                {/* <div className="form-control w-full mt-3">
                    <label className="label"> <span className="label-text text-2xl">Position</span> </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Driver</span>
                            <input {...register("role")} type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Conductor</span>
                            <input {...register("role")} type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Helper</span>
                            <input {...register("role")} type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Others</span>
                            <input {...register("role")} type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>
                </div> */}





                <input type="submit" className='btn btn-accent mt-6 w-full my-3' value="Add a staff" />

            </form>
        </div>
    );
};

export default AddStaff;