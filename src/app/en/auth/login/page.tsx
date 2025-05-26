"use client"
import React, { FC, useState } from 'react';
import AuthenticationService from "@/app/components/service/AuthenticationService";

interface LoginProps { }

const Login: FC<LoginProps> = ({ }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const payload: any = await AuthenticationService.login(email, password);
            const roles: any = payload['cognito:groups'] || [];
            const isAdmin = roles.includes('admin');
            if (isAdmin) {
                window.location.href = '/logged/admin';  // recarga completa
                return;
            }
            window.location.href = '/logged/dashboard';  // recarga completa
            return;
        } catch (e: any) {
            console.error(e);
            setError(e?.message || 'Error al iniciar sesión. Verifica tus credenciales.');
        }


        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow pt-24">
            <form
                onSubmit={handleLogin}
                className="flex flex-col gap-4 bg-gray-900 p-8 rounded shadow-md w-full max-w-md mt-36"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

                <input
                    type="text"
                    placeholder="Introduzca su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-black border border-gray-700 text-white placeholder-gray-400"
                    required
                />

                {/* Contenedor relative para el input con el botón */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Introduzca su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 pr-10 rounded bg-black border border-gray-700 text-white placeholder-gray-400 w-full"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                        {showPassword ? (
                            // Ojo tachado (ocultar)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.017.177-1.992.506-2.9m3.414 3.414A3.978 3.978 0 0112 7c1.16 0 2.21.496 2.937 1.28M15 12a3 3 0 01-3 3m3-3a3 3 0 00-3-3m0 0a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0l5 5M3 3l18 18" />
                            </svg>
                        ) : (
                            // Ojo (mostrar)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        )}
                    </button>
                </div>

                {error && (
                    <div className="text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-white text-black py-2 rounded hover:bg-gray-300 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
