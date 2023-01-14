import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [data, setData] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = data => {
        setLoginError('');
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

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
                                minLength: { value: 6, message: "Password must be 6 characters or longer" }
                            })}
                            placeholder="Your password" className="input input-bordered w-full" type="password" />

                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}



                        <label className="label"> <span className="label-text mt-1">Forgot password?</span> </label>
                    </div>


                    <input type="submit" className='btn btn-accent mt-6 w-full my-3' value="Login" />

                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p>New to Bus Affinity? <Link to="/signup" className='text-secondary font-semibold'>Create a new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;