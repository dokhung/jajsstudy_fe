export const Login = () => {
    return(
        <main　className={"border border-black"}>
            {/* Login UI */}
            <section className={"min-h-screen flex items-center justify-center"}>
                <form className={"shadow-2xl p-10"}>
                    <div className={"flex flex-col gap-4"}>
                        {/* Title */}
                        <div className={"flex-col gap-2 border border-black"}>
                            <h1 className={"font-bold text-2xl text-center"}>
                                Login
                            </h1>
                        </div>
                        {/* ID */}
                        <div className={"flex items-center justify-center gap-4"}>
                            <label className={"font-bold text-2xl w-32 "}>
                                Email
                            </label>
                            <input className={"border border-black text-center"}
                                   name="email" placeholder="Email" />
                        </div>
                        {/* PW */}
                        <div className={"flex items-center justify-center gap-4"}>
                            <label className={"font-bold text-2xl w-32"}>
                                PassWord
                            </label>
                            <input className={"border border-black text-center"}
                                   name="password" placeholder="Password" />
                        </div>
                        {/* Button */}
                        <div>
                            <button className={"w-full bg-[#d9d9d9] text-center"}>Login</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}