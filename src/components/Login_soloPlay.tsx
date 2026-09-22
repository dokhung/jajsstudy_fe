import * as React from "react";
import {Button} from "@mui/material";

export const LoginSoloPlay: React.FC = () => {
    return (
        <main className={"min-h-screen flex items-center justify-center"}>
            {/* Window */}
            <section className={"shadow-2xl border border-black-500 rounded-lg flex flex-col items-center justify-center p-10"}>
                <form className={"flex flex-col items-center gap-4"}>
                    {/* ID */}
                    <div className={"flex items-center justify-center"}>
                        <label className={"font-bold text-xl w-32 "}>
                            <h5>ID</h5>
                        </label>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            className="text-center border border-gray-200 rounded-lg"
                        />
                    </div>
                    {/* PW */}
                    <div className={"flex items-center justify-center"}>
                        <label className={"font-bold text-xl w-32 "}>
                            <h5>Password</h5>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="text-center border border-gray-200 rounded-lg"/>
                    </div>
                    {/* Button */}
                    <div className={"flex items-center justify-center"}>
                        <Button>Login</Button>
                    </div>
                </form>
            </section>
        </main>
    )
}