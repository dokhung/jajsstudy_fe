import * as React from "react";

export const LoginPractice4 = () : React.JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    return(
        <main className={"min-h-screen flex items-center justify-center"}>
            <section className={"flex flex-col shadow-2xl rounded-lg border-2 border-gray-300"}>
                <div>
                    <h1 className={"text-center"}>Login</h1>
                </div>
                <form className={"flex flex-col gap-2 p-4"}>
                    <div className={"flex flex-col"}>
                        <label htmlFor={"email"}>Email</label>
                        <input
                            className={"border-2 border-gray-300 rounded-md p-2"}
                            type={"email"} id={"email"} value={email} onChange={(event:React.ChangeEvent<HTMLInputElement>):void => setEmail(event.target.value)} />
                    </div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={"password"}>Password</label>
                        <input
                            className={"border-2 border-gray-300 rounded-md p-2"}
                            type={"password"} id={"password"} value={password} onChange={(event:React.ChangeEvent<HTMLInputElement>):void => setPassword(event.target.value)} />
                    </div>
                </form>
                <div>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
            </section>
        </main>
    )
}