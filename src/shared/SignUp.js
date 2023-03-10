import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [data, setData] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [imageURL, setImageURL] = useState('');


    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/')
    }

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey);

    const handleRegister = data => {
        console.log(data);
        setSignupError('');
        // console.log(data.image[0]);
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
                    console.log(imgData.data.url)
                    setImageURL(imgData.data.url);
                }
            })

        createUser(data.email, data.password, imageURL)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User created successfully..!")

                const userInfo = {
                    displayName: data.name,
                    photoURL: imageURL
                }

                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        saveUserInDatabase(data.name, data.email, imageURL)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error.message)
                setSignupError(error.message)
            })
    }

    const saveUserInDatabase = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                console.log("New user added successfully..")
                // navigate('/');
                setCreatedUserEmail(email);
                // getUserToken(email);
            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/');
    //             }
    //         })
    // }

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

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Photo</span> </label>
                        <input {...register("image", { required: true })} aria-invalid={errors.name ? "true" : "false"} placeholder="Your name" className="input input-bordered w-full" type="file" />
                        {errors.name?.type === 'required' && <p role="alert" className='text-red-600'>Name is required</p>}
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