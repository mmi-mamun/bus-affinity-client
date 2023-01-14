import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [data, setData] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = data => {
        setSignupError('');
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User created successfully..!")

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => { console.log("New user added successfully..") })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error.message)
                setSignupError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Sign up</h2>
                <form onSubmit={handleSubmit(handleRegister)}>

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
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input {...register("password",
                            {
                                required: "Password is required",
                                pattern: { value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/, message: "At least 2 uppercase, 2 lowercase, 2 digits with special character should be included in your password" },
                                minLength: { value: 6, message: "Password must be 6 characters or longer" }
                            })}
                            placeholder="Your password" className="input input-bordered w-full" type="password" />

                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>


                    <input type="submit" className='btn btn-accent mt-6 w-full my-3' value="Sign Up" />

                    {
                        signupError && <p className="text-red-600">{signupError}</p>
                    }
                </form>
                <p>Already have an account? <Link to="/login" className='text-secondary font-semibold'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;