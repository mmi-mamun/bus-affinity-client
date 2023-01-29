import { useQuery } from '@tanstack/react-query';
import React from 'react';
import driver from '../assets/images/driver.jpg'
import LoadSpinner from '../shared/LoadSpinner';

const AddDriver = () => {
    const { data: busses, isLoading } = useQuery({
        queryKey: ['bus'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/busName`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>
    }

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);


    const handleAddDriver = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const bus = form.bus.value;
        const photo = form.photo.value;
        console.log({ name, email, phone, bus, photo })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 lg:px-3 text-center lg:text-left">
                    <img src={driver} alt="" />
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="w-full lg:w-1/2 card flex-shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleAddDriver} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Driver Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Driver Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input name='phone' type="number" placeholder="Phone number" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select the bus</span>
                            </label>
                            <select name='bus' className="select select-bordered">
                                {/* <option disabled selected>Pick one</option> */}
                                {
                                    busses?.map(bus => <option key={bus._id} value={bus?.busName}>{bus?.busName}</option>)
                                }


                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' type="file" placeholder="Photo URL" className="input input-bordered" />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Driver</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDriver;