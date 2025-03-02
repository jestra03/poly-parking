import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="page-container">
            <Header />
            <div className="content-container justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold text-center mb-8">
                        Enter Your Cal Poly Credentials:
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block mb-1">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field dark:text-black"
                                placeholder="jmustang"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field dark:text-black"
                                placeholder="••••••••••"
                                required
                            />
                        </div>

                        <button type="submit" className="button-primary w-full">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;