import * as React from "react";
import {useState} from "react";

export const LoginPractice9 = () : React.JSX.Element => {
    // Email
    const [email, setEmail] = useState<string>("");
    // PW
    const [password, setPassword] = useState<string>("");
    // ERROR
    const [emailError, setEmailError] = useState<string>("");
    // PW ERROR
    const [passwordError, setPasswordError] = useState<string>("");
    // Success
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === ""){
            setEmailError("Email is required");
        }

        if(email.includes("@")){
            setEmailError("Email is invalid");
        }

        if (password === ""){
            setPasswordError("Password is required");
        }

        if (password.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }

        setIsSuccess(true);

    }

    return (
        <main className={"min-h-screen flex flex-col items-center justify-center"}>
            <section className="border border-black shadow-2xl rounded-lg flex flex-col justify-center items-center bg-white">
                <form onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center p-5">
                    {/*Email*/}
                    <div className="flex flex-col justify-centerborder-gray-500">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            className="flex justify-center items-center border border-gray-500"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        {emailError && <p className="text-red-600">{emailError}</p>}
                    </div>
                    <div className="flex flex-col justify-centerborder-gray-500">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            className="w-full flex justify-center items-center border border-gray-500"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        {passwordError && (
                            <div className="text-red-500 text-red-500">
                                {passwordError}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-centerborder-gray-500 pt-4">
                        <button className="w-full flex justify-center items-center border border-gray-500">
                            Login
                        </button>
                    </div>
                </form>
                {isSuccess && (
                    <div className="flex items-center justify-center text-sm font-medium text-gray-700">
                        {isSuccess}
                    </div>
                )}
            </section>
        </main>
    )

}