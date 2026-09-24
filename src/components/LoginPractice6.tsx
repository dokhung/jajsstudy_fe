import * as React from "react";
import {Button} from "@mui/material";

export const LoginPractice6 : React.FC = () => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (email === "" || password === "") {
            setMessage("Please enter both email and password");
            return;
        }

        setMessage("Login successful");
        console.log("email :: " + email);
        console.log("password :: " + password);

    }



        return (
            <main className={"min-h-screen flex items-center justify-center"}>
                <section className={"flex flex-col items-center justify-center"}>
                    <div className={"text-2xl font-bold"}>
                        Login
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={"flex flex-col"}>
                            <label className={"text-lg font-medium"}>
                                Email
                            </label>
                            <input
                                className={"border border-gray-300 rounded-md p-2"}
                                type="email"
                                onChange={(e): void => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className={"flex flex-col"}>
                            <label className={"text-lg font-medium"}>
                                Password
                            </label>
                            <input
                                className={"border border-gray-300 rounded-md p-2"}
                                type="password"
                                onChange={(e): void => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div>
                            <Button type={"submit"}>Login</Button>
                        </div>
                    </form>
                    {message &&
                        <div className={"text-red-500"}>
                            <p>
                                {message}
                            </p>
                        </div>
                    }
                </section>
            </main>
        )
    }