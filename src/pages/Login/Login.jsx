import React, { useState } from 'react';
import img from '../../assets/Signin.svg';
import { API } from '../../utils/config';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const { setIsAutenticated } = useAuth();
    const [inputValues, setInputValues] = useState({
        email: "",
        password: ""
    });

    const onChange = (evt) => {
        setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        API.post('user/login', inputValues).then((res) => {
            localStorage.setItem('token', res.data.token);
            setIsAutenticated(true);
            navigate('/');
        });
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
            <div className="flex w-full h-full shadow-lg">
                <div className="w-[50%] bg-[#C9AC8C] flex items-center justify-center">
                    <img src={img} className="w-[75%]" />
                </div>
                <div className="w-[50%] p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign in</h2>
                    <p className="text-gray-600 mb-4">
                        Do not you have an account? <Link to="/register" className="text-blue-500 cursor-pointer">Sign up</Link>
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <input
                            onChange={onChange}
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border rounded-full"
                        />
                        <input
                            onChange={onChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border rounded-full"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#152540] text-white font-semibold rounded-full hover:bg-gray-800"
                        >
                            Next step
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
