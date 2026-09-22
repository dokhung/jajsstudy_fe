import {Button} from "@mui/material";

export const LoginPractice3 = () => {
    return(
        <main className={"flex flex-col items-center justify-center h-screen"}>
            <section className={"w-96 shadow-2xl p-4 rounded-xl border border-gray-300"}>
                {/* Welcome back */}
                <div className={"flex flex-col items-center"}>
                    <h1 className={"text-2xl font-bold"}>
                        Welcome Back
                    </h1>
                </div>
                {/* Please login to continue */}
                <div className={"flex flex-col items-center"}>
                    <h5 className={"text-center text-md text-gray-500"}>
                        Please login to continue
                    </h5>
                </div>
                <form className={"flex flex-col"}>
                    {/* Email */}
                    <div className={"flex flex-col"}>
                        <label className={"text-lg"}>Email</label>
                        <input className={"border border-gray-300 rounded-md p-2"} type="email" />
                    </div>
                    {/* Password */}
                    <div className={"flex flex-col"}>
                        <label className={"text-lg"}>Password</label>
                        <input className={"border border-gray-300 rounded-md p-2"} type="password" />
                    </div>
                    {/* Remeber me */}{/* Forget Password? */}
                    <div className={"flex flex-row justify-between"}>
                        <div className={"flex flex-row items-center"}>
                            <input className={"border border-gray-300 rounded-md"} type="checkbox" />
                            <h5>Remember me</h5>
                        </div>
                        <div className={"text-blue-500"}>
                            <div>Forget Password?</div>
                        </div>
                    </div>
                    {/* login button */}
                    <div className={"flex flex-row justify-center"}>
                        <Button className={"bg-blue-500 text-white rounded-md"}>
                            Login
                        </Button>
                    </div>
                    {/* Don't have an account? Sign up */}
                    <div className={"flex flex-row justify-between"}>
                        <div>
                            Don't have an account?
                        </div>
                        <div>
                            <a>Sign Up</a>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}