import * as React from "react";
import type {ChangeEvent} from "react";

export const LoginPractice8 = () : React.JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [emailError, setEmailError] = React.useState<string>("");
    const [passwordError, setPasswordError] = React.useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailError("");
        setPasswordError("");

        if (email === ""){
            setEmailError("Please enter a valid email");
        }
        else if (!email.includes("@")){
            setEmailError("Please enter a valid email");
        }

        if (password === ""){
            setPasswordError("Please enter a password");
        }
        else if (password.length < 8){
            setPasswordError("Password must be at least 8 characters long");
        }

    }
    return (
        <main className={"min-h-screen flex justify-center items-center"}>
            <section className="shadow-2xl rounded-lg border border-gray-500 p-10">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">
                        Login
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                        className="flex justify-center items-center border border-gray-500"
                        type="email"
                        value={email}
                        id="email"
                        onChange={(e:ChangeEvent<HTMLInputElement>):void => setEmail(e.target.value)}
                        />
                        {emailError && (
                            <div className="w-full flex justify-center items-center">
                                {emailError}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                        className="w-full flex justify-center items-center border border-gray-500"
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e:ChangeEvent<HTMLInputElement>):void => setPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && (
                        <div className="w-full flex justify-center items-center">
                            {passwordError}
                        </div>
                    )}
                    <div className="w-full flex justify-center items-center w-full">
                        <button type={"submit"} className={"text-center"}>Login</button>
                    </div>
                </form>


            </section>
        </main>
    )
}