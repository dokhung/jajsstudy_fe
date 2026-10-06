import {type JSX, useState} from "react";
import * as React from "react";

export const LoginPractice10 = () : JSX.Element => {
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [emailError,setEmailError] = useState<string>('');
    const [passwordError,setPasswordError] = useState<string>('');
    const [isLoging,setIsLoging] = useState<boolean>(false);
    const [isSuccess,setIsSuccess] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLElement>)  => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        setIsSuccess(false);

        let isValid:boolean = true;

        if (email === ""){
            setEmailError('Email is required');
            isValid = false;
        }
        else if(!email.includes('@')){
            setEmailError('Email is invalid');
            isValid = false;
        }

        if (password === ""){
            setPasswordError('Password is required');
            isValid = false;
        }
        else if(password.length < 8){
            setPasswordError('Password must be at least 8 characters');
            isValid = false;
        }

        setTimeout((): void =>{
            if (isValid){
                setIsLoging(false);
                setIsSuccess(true);
            }
        })
    }

    return(
        <main className={"min-h-screen flex items-center justify-center bg-[#d9d9d9]"}>
            <section className={"border border-black shadow-2xl flex flex-col items-center justify-center w-96 bg-white rounded-xl p-10"}>
                <div className={"pb-4"}>
                    <h1 className={"font-bold text-center text-3xl"}>
                        Welcome Back
                    </h1>
                    <h1 className={"text-[#d9d9d9] text-sm text-center"}>
                        Sign in to your account
                    </h1>
                </div>
                <div className={"flex flex-col gap-4 p-4"}>
                    <form className={"flex flex-col"}>
                        <div className={"flex flex-col"}>
                            <label>
                                Email
                            </label>
                            <input type="email"
                            className={"border border-[#d9d9d9] w-full p-4 rounded-xl ring-4"}
                                   onChange={(e) => setEmail(e.target.value)}
                                   id={"email"}
                                   value={email}
                            />
                            {emailError && (
                                <p className={"text-red-500 text-sm"}>{emailError}</p>
                            )}
                        </div>
                        <div className={"flex flex-col"}>
                            <label>
                                Password
                            </label>
                            <input type="password"
                            className={"border border-[#d9d9d9] w-full p-4 rounded-xl ring-4"}
                                    onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                                   id={"password"}
                            />
                            {passwordError && <p className={"text-red-500 text-sm"}>{passwordError}</p>}
                        </div>
                        <div className={"flex justify-center mt-4"}>
                            <button className={"border border-black w-full bg-blue-400 hover:bg-blue-500 text-white rounded-xl"}
                                    disabled={isLoging}
                                    type={"button"}
                                    onClick={handleSubmit}
                            >
                                {isLoging ? "Loading..." : "Login"}
                            </button>
                        </div>
                    </form>
                    {isSuccess && (
                        <p className={"text-green-500 text-sm"}>
                            Login successful!
                        </p>
                    )}
                    <div className={"flex flex justify-between gap-4"}>
                        <span>
                            Find ID
                        </span>
                        <span>
                            Forgot password?
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}