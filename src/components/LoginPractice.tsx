export const LoginPractice = () => {
    return (
        <main className={"min-h-screen flex flex-col items-center justify-center"}>
            <section className={"flex flex-col justify-center items-center"}>
                {/* TITLE */}
                <div className={"flex"}>
                    <h1 className={"font-bold"}>
                        Login
                    </h1>
                </div>
                {/* ID */}
                <div className={"flex justify-center"}>
                    <label>
                        <h5>
                            ID
                        </h5>
                    </label>
                    <input
                        className={"w-full appearance-none rounded-lg border border-gray-300 rounded-md"}
                    />
                </div>
                <div>
                    <label>
                        PW
                    </label>
                    <input/>
                </div>
                <div>
                    <button>login</button>
                </div>
            </section>
        </main>
    )
}