import * as React from "react";

export default function LoginPractice7():React.JSX.Element {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email === ""){
            setMessage("Email is required");
            return;
        }

        if (password === ""){
            setMessage("Password is required");
            return;
        }

        if (!email.includes("@")){
            setMessage("Email is invalid");
            return;
        }

        if (password.length < 8){
            setMessage("Password must be at least 8 characters");
            return;
        }

        setMessage("");
    };


    return(
        <main className={"min-h-screen flex items-center justify-center"}>
            <section className={"shadow-2xl border border-black p-10 rounded-2xl"}>
                <div className={"flex flex-col items-center text-center font-bold text-2xl"}>
                    {/* Login Title */}
                    <h1 className={"text-4xl"}>
                        Login
                    </h1>
                </div>
                <form className={"flex flex-col gap-4"} onSubmit={handleSubmit}>
                    <div>
                        <label className={"flex flex-col gap-2"}>
                            Email
                        </label>
                        <input type={"email"} className={"border border-black p-2 rounded-md"}
                        value={email}
                        onChange={(event):void => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className={"flex flex-col gap-2"}>
                            Password
                        </label>
                        <input type={"password"} className={"border border-black p-2 rounded-md"}
                        value={password}
                        onChange={(event):void => setPassword(event.target.value)}
                        />
                    </div>
                    <div className={"flex justify-center"}>
                        <button className={"border border-black p-2 rounded-md"} type="submit">
                            Login
                        </button>
                    </div>
                </form>
                {message && <p>{message}</p>}
            </section>
        </main>
    )
}