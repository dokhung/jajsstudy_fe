import * as React from "react";
import {Button} from "@mui/material";
import {useState} from "react";

export const LoginPractice5  = (): React.JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log("pw :: "+password);
        console.log("email :: " +email);
    }
    return (
        <main className={"min-h-screen flex items-center justify-center"}>
            <section className={"flex flex-col gap-2 p-4"}>
                <div className={"flex flex-col gap-2 p-4"}>
                    <h1 className={"font-bold text-2xl text-center"}>
                        Login
                    </h1>
                </div>
                <form className={"flex flex-col gap-2 p-4 w-64"} onSubmit={handleSubmit}>
                    <div className={"flex flex-col"}>
                        <label className={"font-bold text-xl"}>
                            Email
                        </label>
                        <input className={"border-2 border-gray-300 rounded-md p-2"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.target.value);
                        }}
                        value={email} type={"email"}
                        />
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"font-bold text-xl"}>
                            PassWord
                        </label>
                        <input className={"border-2 border-gray-300 rounded-md p-2"}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(e.target.value);
                        }} value={password} type={"password"}/>
                    </div>
                    <div className={"flex flex-col gap-2 p-4"}>
                        <Button type={"submit"}>Login</Button>
                    </div>
                </form>
            </section>
        </main>
    )
}