export default function LoginPractice11() {
    return (
        <main className={"min-h-screen bg-blue-100"}>
            <section className={"flex flex justify-between"}>
                <div className={"min-full p-10"}>
                    <div className={"flex flex-col justify-center shadow-2xl bg-white rounded-md p-5"}>
                        <div className="text-[9px] tracking-[0.4em] uppercase">
                            <span className="font-semibold text-[#172033]">STUDY</span>
                            <span className="font-normal text-[#8E99AD]">PLATFORM</span>
                        </div>
                        <div className={"mt-5"}>
                            <h1 className={"font-bold"}>Welcome Back</h1>
                            <p className={"text-slate-500 text-sm"}>Log in to continue your journey</p>
                        </div>
                        <form className={"mt-5 pb-5"}>
                            <div>
                                <label className={"text-sm font-bold"}>
                                    Email
                                </label>
                                <input type="email"
                                className={"border border-slate-300 rounded-md p-2 w-full"}
                                />
                            </div>
                            <div className={"mt-5"}>
                                <label className={"text-sm font-bold"}>
                                    Password
                                </label>
                                <input type="password"
                                className={"border border-slate-300 rounded-md p-2 w-full"}
                                />
                            </div>
                            <div className={"mt-5 flex justify-between"}>
                                <input
                                type={"checkbox"}
                                />
                                <label className={"text-sm pr-8"}>
                                    Remember me
                                </label>
                                <button className={"text-blue-500 font-bold text-sm"}>
                                    Forgot password?
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-gray-300" />
                                <span className="text-sm text-gray-500">
                                    or
                                </span>
                                <div className="h-px flex-1 bg-gray-300" />
                            </div>
                            <div className={"mt-5 flex items-center justify-center"}>
                                <button type="submit" className={" bg-blue-500 text-white rounded-md w-full h-8"}>
                                    Log in
                                </button>
                            </div>
                        </form>
                        <div>
                            <button
                                className="bg-white text-black rounded-md w-full h-10 text-sm border border-gray-300 flex items-center justify-center gap-2">
                                <span
                                    className="w-6 h-6 rounded-full border flex items-center justify-center text-xs">
                                  G
                                </span>
                                <span>
                                  Continue with Google
                                </span>
                            </button>
                        </div>
                        <div className="mt-5 flex items-center justify-center gap-4 text-sm">
                          <span>
                            Find ID
                          </span>
                          <span className="text-gray-300">
                            |
                          </span>
                          <span>
                            Sign Up
                          </span>
                        </div>
                    </div>
                </div>
                <div className={"min-full border border-black"}>
                    2
                </div>
            </section>
        </main>
    );
}