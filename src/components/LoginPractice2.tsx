import {Button} from "@mui/material";

export const LoginPractice2 = () => {
    return (
        <main className={"min-h-screen flex items-center justify-center"}>
            <section className={"flex flex-col gap-4 shadow-2xl border border-gray-300 p-8 rounded-lg w-96"}>
                {/* Welcome */}
                <div>
                    <h1 className={"text-3xl font-bold text-center"}>Welcome</h1>
                </div>
                {/* Login to your account */}
                <div>
                    <h2 className={"text-lg font-semibold text-center"}>Login to your account</h2>
                </div>
                <form className={"flex flex-col gap-4"}>
                    {/* Email */}
                    <div className={"flex flex-col gap-2"}>
                        <label>
                            Email
                        </label>
                        <input type="email" className={"border border-gray-300 p-2 rounded-md"} />
                    </div>
                    {/* Password */}
                    <div className={"flex flex-col gap-2"}>
                        <label>
                            Password
                        </label>
                        <input type="password" className={"border border-gray-300 p-2 rounded-md"} />
                    </div>
                    {/* Remember me */}
                    <div className={"flex items-center gap-2"}>
                        <input type="checkbox" className={"border border-gray-300 rounded-md"} />
                        <label>
                            Remember me
                        </label>
                    </div>
                    {/* Login */}
                    <div className={"flex justify-center mt-4"}>
                        <Button className={"bg-blue-500 text-white px-4 py-2 rounded-md"}>Login</Button>
                    </div>
                    {/* Forgot Password? */}
                    <div className={"flex justify-center mt-2"}>
                        <a href="#" className={"text-blue-500 hover:underline"}>Forgot Password?</a>
                    </div>
                </form>

            </section>
        </main>
    )
}