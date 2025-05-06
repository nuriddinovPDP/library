import React, { useState } from 'react'
import img from '../../assets/Signup.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { API } from '../../utils/config';

function Register() {
    const navigate = useNavigate();
    const { setIsAutenficated } = useAuth();
    const [inputValues, setInputValues] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: ""
    });

    const onChange = (evt) => {
        setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        API.post('user/register', inputValues).then((res) => {
            localStorage.setItem('token', res.data.token);
            setIsAutenficated(true);
            navigate('/');
        });
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
            <div className="flex w-full h-full shadow-lg">
                <div className="w-[50%] bg-[#C9AC8C] flex items-center justify-center">
                    <img src={img} className="w-3/4" />
                </div>
                <div className="w-[50%] p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign up</h2>
                    <p className="text-gray-600 mb-4">
                        Already have an account? <Link to="/login" className="text-blue-500 cursor-pointer">Sign in</Link>
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <input onChange={onChange} type="text" placeholder='First name' name='first_name'
                            className="w-full px-4 py-3 border rounded-full" />
                        <input onChange={onChange} type="text" placeholder='Last name' name='last_name'
                            className="w-full px-4 py-3 border rounded-full" />
                        <input onChange={onChange} type="tel" placeholder='Phone' name='phone'
                            className="w-full px-4 py-3 border rounded-full" />
                        <input onChange={onChange} type="email" placeholder='Email' name='email'
                            className="w-full px-4 py-3 border rounded-full" />
                        <input onChange={onChange} type="password" placeholder='Password' name='password'
                            className="w-full px-4 py-3 border rounded-full" />
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#152540] text-white font-semibold rounded-full hover:bg-gray-800"
                        >
                            Next step
                        </button>
                    </form>
                </div>
            </div>
        </div>)
}

export default Register