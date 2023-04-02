import {Handlers} from "https://deno.land/x/fresh@1.1.2/server.ts";
import Header from "../../components/Header.tsx";
import MyHead from "../../components/MyHead.tsx";


export default function Projects() {
    return (
        <>
            <MyHead title="Projects"></MyHead>
            <Header active={"/projects"}></Header>
            <div class="p-4 mx-auto max-w-screen-lg">
                <h1 class="text-4xl font-bold text-center my-8">Projects</h1>
                <div class="p-4 mt-4 mx-auto max-w-screen-lg justify-center flex flex-wrap">
                    <a href="https://github.com/FreezingKas/study-go-ransomware"
                       class="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-[#FFFAFA] shadow-xl text-2xl p-4 text-center rounded-xl
                    transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4">
                        Study Go Ransomware
                        <i><span class="text-xs text-gray-500">Personal</span></i>
                    </a>
                    <a href="https://github.com/M-k-Hack/not-a-seedbox"
                       class="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-[#FFFAFA] shadow-xl text-2xl p-4 text-center rounded-xl
                    transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4">
                        Not A Seedbox
                        <i><span class="text-xs text-gray-500">Team</span></i>
                    </a>
                    <a href="https://github.com/M-k-Hack/Kubi"
                       class="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-[#FFFAFA] shadow-xl text-2xl p-4 text-center rounded-xl
                    transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4">
                        Kubi
                        <i><span class="text-xs text-gray-500">Personal</span></i>
                    </a>
                    <a href="#"
                       class="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-[#FFFAFA] shadow-xl text-2xl p-4 text-center rounded-xl
                    transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4">
                        CTF de l'Avent
                        <i><span class="text-xs text-gray-500">Team</span></i>
                    </a>
                    <a href="https://github.com/GCC-ENSIBS/blockchain-gcc"
                       className="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-[#FFFAFA] shadow-xl text-2xl p-4 text-center rounded-xl
                    transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4">
                        GCC Private Blockchain
                        <i><span className="text-xs text-gray-500">School</span></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export const handler: Handlers = {
    GET(req, ctx) {
        return ctx.render();
    }
}