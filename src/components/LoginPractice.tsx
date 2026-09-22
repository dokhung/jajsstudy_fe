import {Button} from "@mui/material";

export const LoginPractice = () => {
    return (
        <main className={"min-h-screen flex flex-col items-center justify-center"}>
            <section className={"flex flex-col justify-center items-center shadow-2xl p-10 border border-black-300 rounded-lg"}>
                {/* TITLE */}
                <div className={"flex m-5"}>
                    <h1 className={"font-bold text-2xl text-center"}>
                        Login
                    </h1>
                </div>
                <form className={"flex flex-col justify-center items-center gap-4"}>
                    {/* ID */}
                    <div className={"flex justify-center"}>
                        <label className={"flex w-32"}>
                            ID
                        </label>
                        <input
                            className={"w-full appearance-none rounded-lg border border-gray-300"}
                            type="text"
                        />
                    </div>
                    <div className={"flex justify-center"}>
                        <label className={"flex w-32"}>
                            Password
                        </label>
                        <input className={"w-full border border-gray-300 rounded-lg"} type="password"/>
                    </div>
                    <div className={"flex justify-center"}>
                        <Button className={"rounded-lg bg-blue-500 text-white px-4 py-2 mt-5"}>login</Button>
                    </div>
                </form>
            </section>
        </main>
    )
}